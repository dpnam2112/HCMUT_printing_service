import { FC, useState } from "react";
import Container from "../components/container";
import Layout from "../components/layout";
import { ADMIN_MANAGEMENT_VIEW } from "../models/constant";
import ExtensionView from "../components/admin/extension-view";
import PrinterView from "../components/admin/printer-view/printer-view";
import PrintingHistoryView from "../components/admin/printing-history-view";
import TransactionHistoryView from "../components/admin/transaction-history-view";

const views = [
  ADMIN_MANAGEMENT_VIEW.ADD_EXTENSION,
  ADMIN_MANAGEMENT_VIEW.ADD_PRINTER,
  ADMIN_MANAGEMENT_VIEW.PRINTING_HISTORY,
  ADMIN_MANAGEMENT_VIEW.TRANSACTION_HISTORY,
];

const AdminManagement = () => {
  const [currentView, setCurrentView] = useState<ADMIN_MANAGEMENT_VIEW>(
    ADMIN_MANAGEMENT_VIEW.ADD_EXTENSION
  );

  return (
    <>
      <Layout>
        <Container>
          <div className="flex items-center rounded border h-[1000px] w-full mb-4 mp-10">
            <div className="flex flex-col w-1/5 h-full border-r-[1px] pt-20">
              {views.map((view: ADMIN_MANAGEMENT_VIEW, index: number) => {
                return (
                  <ButtonSelect
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
            <div className="w-4/5 h-full">{RenderView(currentView)}</div>
          </div>
        </Container>
      </Layout>
    </>
  );
};

const RenderView = (currentView: ADMIN_MANAGEMENT_VIEW) => {
  switch (currentView) {
    case ADMIN_MANAGEMENT_VIEW.ADD_EXTENSION:
      return <ExtensionView />;
    case ADMIN_MANAGEMENT_VIEW.ADD_PRINTER:
      return <PrinterView />;
    case ADMIN_MANAGEMENT_VIEW.PRINTING_HISTORY:
      return <PrintingHistoryView />;
    case ADMIN_MANAGEMENT_VIEW.TRANSACTION_HISTORY:
      return <TransactionHistoryView />;
    default:
      return <></>;
  }
};

type ButtonSelectProps = {
  name: string;
  onClick: () => void;
  isLast?: boolean;
};

const ButtonSelect: FC<ButtonSelectProps> = ({ name, onClick, isLast }) => {
  return (
    <div
      className={`flex items-center justify-center w-full h-10 border-t ${
        isLast && "border-b"
      } text-center hover:bg-blue-200 cursor-pointer`}
      onClick={onClick}
    >
      <span className="font-medium text-lg">{name}</span>
    </div>
  );
};

export default AdminManagement;
