import FooterList from "./FooterList";
import GithubLogo from "../../public/assets/images/github.svg";
import TwitterLogo from "../../public/assets/images/twitter.svg";

export default function Footer() {
  const data = {
    title: "Smart Printing Service",
    rows: [
      {
        title: "Hướng dẫn sử dụng",
        url: "/",
      },
      {
        title: "Lịch sử cập nhật",
        url: "/",
      },
      {
        title: "Đối tác",
        url: "/ios",
      },
      {
        title: "Tại sao chọn Smart Printing?",
        url: "/windows",
      },
    ],
  };

  const appData = {
    title: "Tải xuống",
    rows: [
      {
        title: "Smart Printing bản Windows",
        url: "",
      },
      {
        title: "Smart Printing bản MacOS",
        url: "",
      },
      {
        title: "Smart Printing bản iOS (App Store)",
        url: "",
        icon: "true",
      },
      {
        title: "Smart Printing bản Android (Google Play)",
        url: "",
        icon: "true",
      },
    ],
  };

  const legalData = {
    title: "Pháp lý",
    rows: [
      {
        title: "Tài liệu",
        url: "",
        icon: "true",
      },
      {
        title: "Điều khoản dịch vụ",
        url: "/terms-of-use",
      },
    ],
  };

  const supportData = {
    title: "Hỗ trợ",
    rows: [
      {
        title: "Liên hệ chúng tôi",
        url: "/support",
      },
      {
        title: "Báo cáo lỗi",
        url: "https://github.com/ProxymanApp/Proxyman/issues",
        icon: "true",
      },
      {
        title: "Yêu cầu tính năng",
        url: "https://github.com/ProxymanApp/Proxyman/issues",
        icon: "true",
      },
    ],
  };
  const companyData = {
    title: "Cộng đồng",
    rows: [
      {
        title: "Về chúng tôi",
        url: "/about-us",
      },
      {
        title: "Facebook",
        url: "/acknowledgement",
      },
      {
        title: "Instagram",
        url: "/acknowledgement",
      },
      {
        title: "Twitter",
        url: "/acknowledgement",
      },
    ],
  };

  return (
    <footer className="w-full px-40 mt-12">
      <div className="border-t border-accent-2">
        <div className="flex flex-col md:flex-row items-center justify-between md:items-start sm:space-x-6 lg:space-x-10">
          <FooterList title={data.title} rows={data.rows}></FooterList>
          <FooterList title={appData.title} rows={appData.rows}></FooterList>
          <FooterList
            title={legalData.title}
            rows={legalData.rows}
          ></FooterList>
          <FooterList
            title={supportData.title}
            rows={supportData.rows}
          ></FooterList>
          <FooterList
            title={companyData.title}
            rows={companyData.rows}
          ></FooterList>
        </div>

        <div className="flex flex-wrap items-center justify-between mb-10 mt-10 w-full">
          <div className="flex flex-col justify-center mb-6 md:mb-0 md:text-left">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2023{" "}
              <span className="text-blue-500 text-sm">
                <a href="/">Đại Học Bách Khoa TP.HCM</a>
              </span>
            </p>
            <p className="text-gray-500 text-sm text-center sm:text-left pt-2">
              268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh
            </p>
          </div>
          <div className="flex flex-wrap justify-end text-center items-center gap-6">
            <a
              target="_blank"
              rel="noopener"
              className="text-gray-500 hover:text-gray-700"
            >
              <TwitterLogo className="w-5 h-5"></TwitterLogo>
            </a>
            <a
              target="_blank"
              rel="noopener"
              className="text-gray-500 hover:text-gray-700"
            >
              <GithubLogo className="w-5 h-5"></GithubLogo>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
