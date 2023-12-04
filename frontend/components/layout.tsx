import Footer from "./footer/Footer";
import NewNavigationBar from "./navbar/NewNavigationBar";
import { Toaster } from "react-hot-toast";

export default function Layout({ preview, children }) {
  return (
    <div className="flex flex-col h-screen w-full heroTitleBg">
      <Toaster />
      <NewNavigationBar />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
