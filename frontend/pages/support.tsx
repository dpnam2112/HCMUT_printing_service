import Layout from "../components/layout";
import CheckIcon from "../public/assets/images/pricing-check.svg";
import PageContainer from "../components/layout-type/PageContainer";

export default function Support() {
  return (
    <Layout preview={{}}>
      <PageContainer
        layout="left"
        width="2/3"
        title="Liên hệ chúng tôi"
        subTitle="Bạn gặp sự cố, cần hỗ trợ? Bạn cần thêm tính năng mới để làm việc hiệu quả hơn?"
        secondSubTitle="Hãy liên hệ với chúng tôi thông qua support@sps.hcmut.edu.vn"
      >
        <div className="flex flex-col justify-start mt-12">
          <h2 className="text-highlight mt-2">
            Chúng tôi luôn có mặt để hỗ trợ ban.
          </h2>
          <p className="text-body mt-6">
            Nếu bạn có bất kỳ yêu cầu gì, hãy liên hệ với chúng tôi thông qua
            các địa chỉ bên dưới. Chúng tôi sẽ trả lời nhanh nhất có thể.
            <br /> Xin hãy cung cấp thông tin chi tiết nhất có thể để chúng tôi
            có thể hỗ trợ bạn tốt hơn. Xin cảm ơn!
          </p>
          <div className="w-full flex flex-col space-y-2 mt-4">
            <SupportListItem
              text="Báo cáo lỗi hoặc yêu cầu tính năng mới tại"
              emailTo="Github"
            />
            <SupportListItem
              text="Góp ý, thảo luận về Smart Printing Service tại"
              emailTo="Discord"
            />
            <SupportListItem
              text="Hỗ trợ hoàn trả phí mua giấy hoặc các câu hỏi chung tại"
              emailTo="support@sps.hcmut.edu.vn"
            />
            <SupportListItem
              text="Liên hệ với Trưởng phòng kỹ thuật tại"
              emailTo="spso@hcmut.edu.vn"
            />
          </div>
        </div>
      </PageContainer>
    </Layout>
  );
}

const SectionUser = () => {
  return (
    <div className="flex flex-col w-[1050px] h-full">
      <h1 className="font-semibold w-full text-3xl">Lịch sử in ấn</h1>
      <div className="w-full h-[1px] bg-[#D8DEE4] my-3" />
    </div>
  );
};

const SupportListItem = ({ text, emailTo, hrefLink }: any) => {
  return (
    <div className="w-full flex flex-row items-center justify-start">
      <div className="w-5 h-5 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
        <CheckIcon className="w-4 h-4 p-0.5" />
      </div>
      <span className="text-left text-gray-800 text-base font-light">
        {text + " "}
        <a className="text-blue-600 hover:underline" href={hrefLink}>
          {emailTo}
        </a>
      </span>
    </div>
  );
};
