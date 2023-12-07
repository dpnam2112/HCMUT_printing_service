import Container from "../components/container";
import Layout from "../components/layout";
import { UserInfo } from "../models/types";
import { FC, useEffect, useState } from "react";
import networkService from "../models/network-service";
import { PROFILE_MANAGEMENT } from "../models/constant";
import PrintingUserHistoryView from "../components/admin/printing-history-view/printing-user-history-view";
import TransactionUserHistoryView from "../components/admin/transaction-history/transaction-user-history-view";

const views = [
  PROFILE_MANAGEMENT.PRINTING_HISTORY,
  PROFILE_MANAGEMENT.TRANSACTION_HISTORY,
];

const Profile = () => {
  const [currentView, setCurrentView] = useState<PROFILE_MANAGEMENT>(
    PROFILE_MANAGEMENT.PRINTING_HISTORY
  );

  const [userInfo, setUserInfo] = useState<UserInfo | undefined>(undefined);

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    const newUserInfo = await networkService.getUserInfo();
    setUserInfo(newUserInfo);
  };

  if (userInfo && !userInfo.is_admin) {
    return (
      <>
        <Layout preview={{}}>
          <Container>
            <div className="flex items-center rounded border h-[1000px] w-full mb-4 overflow-auto">
              <div className="flex flex-col w-1/5 h-full border-r-[1px]">
                {views.map((view: PROFILE_MANAGEMENT, index: number) => {
                  return (
                    <ButtonSelect
                      isFirst={index === 0}
                      isActive={currentView === view}
                      key={index}
                      name={view}
                      onClick={() => {
                        if (currentView !== view) {
                          setCurrentView(view);
                        }
                      }}
                      isLast={index === views.length - 1}
                    />
                  );
                })}
              </div>
              <div className="w-4/5 h-full">
                {RenderView(currentView, setCurrentView)}
              </div>
            </div>
          </Container>
        </Layout>
      </>
    );
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-2xl font-medium">Không tìm thấy trang bạn cần!</h1>
      <a
        href="/"
        className="px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
      >
        Quay về Trang Chủ
      </a>
    </div>
  );
};

const RenderView = (
  currentView: PROFILE_MANAGEMENT,
  setCurrentView: (view: PROFILE_MANAGEMENT) => void
) => {
  switch (currentView) {
    case PROFILE_MANAGEMENT.PRINTING_HISTORY:
      return <PrintingUserHistoryView />;
    case PROFILE_MANAGEMENT.TRANSACTION_HISTORY:
      return <TransactionUserHistoryView />;
  }
};

type ButtonSelectProps = {
  isActive: boolean;
  name: string;
  onClick: () => void;
  isLast?: boolean;
  isFirst: boolean;
};

const ButtonSelect: FC<ButtonSelectProps> = ({
  isFirst,
  isActive,
  name,
  onClick,
  isLast,
}) => {
  return (
    <div
      className={`flex items-center gap-2 pl-4 w-full h-10 ${
        isFirst ? "" : "border-t"
      } ${isLast && "border-b"} text-center  ${
        isActive ? "bg-blue-400" : "hover:bg-blue-200"
      } cursor-pointer`}
      onClick={onClick}
    >
      <span className="font-medium text-lg">{name}</span>
    </div>
  );
};

export default Profile;
