import Footer from "./footer/Footer";
import NewNavigationBar from "./navbar/NewNavigationBar";

export default function Layout({ preview, children }) {
  return (
    <div className="flex flex-col h-screen w-full heroTitleBg">
      <NewNavigationBar />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
