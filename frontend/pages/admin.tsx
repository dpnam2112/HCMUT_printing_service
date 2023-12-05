import { FC, useEffect, useState } from "react";
import Container from "../components/container";
import Layout from "../components/layout";
import { ADMIN_MANAGEMENT_VIEW } from "../models/constant";
import PrintingHistoryView from "../components/admin/printing-history-view/printing-history-view";
import PrinterManagementView from "../components/admin/printer-management-view/printer-management-view";
import PrinterAddingView from "../components/admin/printer-adding/printer-adding-view";
import ExtensionView from "../components/admin/extension-view/extension-view";
import TransactionHistoryView from "../components/admin/transaction-history/transaction-history-view";
import { UserInfo } from "../models/types";
import networkService from "../models/network-service";

const views = [
  ADMIN_MANAGEMENT_VIEW.PRINTER_MANAGEMENT,
  ADMIN_MANAGEMENT_VIEW.EXTENSION_MANAGEMENT,
  ADMIN_MANAGEMENT_VIEW.ADD_PRINTER,
  ADMIN_MANAGEMENT_VIEW.PRINTING_HISTORY,
  ADMIN_MANAGEMENT_VIEW.TRANSACTION_HISTORY,
];

const AdminManagement = () => {
  const [currentView, setCurrentView] = useState<ADMIN_MANAGEMENT_VIEW>(
    ADMIN_MANAGEMENT_VIEW.PRINTER_MANAGEMENT
  );

  const [userInfo, setUserInfo] = useState<UserInfo | undefined>(undefined);

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    const newUserInfo = await networkService.getUserInfo();
    setUserInfo(newUserInfo);
  };

  if (userInfo && userInfo.is_admin) {
    return (
      <>
        <Layout preview={{}}>
          <Container>
            <div className="flex items-center rounded border h-[1000px] w-full mb-4 overflow-auto">
              <div className="flex flex-col w-1/5 h-full border-r-[1px] pt-20">
                {views.map((view: ADMIN_MANAGEMENT_VIEW, index: number) => {
                  return (
                    <ButtonSelect
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
  currentView: ADMIN_MANAGEMENT_VIEW,
  setCurrentView: (view: ADMIN_MANAGEMENT_VIEW) => void
) => {
  switch (currentView) {
    case ADMIN_MANAGEMENT_VIEW.PRINTER_MANAGEMENT:
      return <PrinterManagementView setCurrentView={setCurrentView} />;
    case ADMIN_MANAGEMENT_VIEW.EXTENSION_MANAGEMENT:
      return <ExtensionView />;
    case ADMIN_MANAGEMENT_VIEW.ADD_PRINTER:
      return <PrinterAddingView />;
    case ADMIN_MANAGEMENT_VIEW.PRINTING_HISTORY:
      return <PrintingHistoryView />;
    case ADMIN_MANAGEMENT_VIEW.TRANSACTION_HISTORY:
      return <TransactionHistoryView />;
    default:
      return <></>;
  }
};

type ButtonSelectProps = {
  isActive: boolean;
  name: string;
  onClick: () => void;
  isLast?: boolean;
};

const ButtonSelect: FC<ButtonSelectProps> = ({
  isActive,
  name,
  onClick,
  isLast,
}) => {
  return (
    <div
      className={`flex items-center justify-center w-full h-10 border-t ${
        isLast && "border-b"
      } text-center  ${
        isActive ? "bg-blue-400" : "hover:bg-blue-200"
      } cursor-pointer`}
      onClick={onClick}
    >
      <span className="font-medium text-lg">{name}</span>
    </div>
  );
};

export default AdminManagement;
