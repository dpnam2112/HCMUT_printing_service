import Layout from "../components/layout";
import CheckIcon from "../public/assets/images/pricing-check.svg";
import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes";
import { UserIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function Support() {
  return (
    <Layout>
      <SectionProfile />

      {/* <PageContainer
        layout="left"
        width="2/3"
        title="Liên hệ chúng tôi"
        subTitle="Bạn gặp sự cố, cần hỗ trợ? Bạn cần thêm tính năng mới để làm việc hiệu quả hơn?"
        secondSubTitle="Hãy liên hệ với chúng tôi thông qua support@sps.hcmut.edu.vn"
      >
        <div className="flex flex-col justify-start mt-10">
          <h2 className="text-highlight">
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
              hrefLink="https://github.com/ProxymanApp/Proxyman"
            />
            <SupportListItem
              text="Góp ý, thảo luận về Smart Printing Service tại"
              emailTo="Discord"
              hrefLink="https://gitter.im/Proxyman-app/community"
            />
            <SupportListItem
              text="Hỗ trợ hoàn trả phí mua giấy hoặc các câu hỏi chung tại"
              emailTo="support@sps.hcmut.edu.vn"
              hrefLink="mailto:support@proxyman.io"
            />
            <SupportListItem
              text="Liên hệ với Trưởng phòng kỹ thuật tại"
              emailTo="spso@hcmut.edu.vn"
              hrefLink="mailto:nghia@proxyman.io"
            />
          </div>
        </div>
      </PageContainer> */}
    </Layout>
  );
}

const SectionProfile = () => {
  return (
    <div className="flex items-center w-full h-[500px] justify-center px-60">
      <div className="flex flex-col w-[300px] h-full mr-16">
        <Flex gap="3" align="center" className="mb-4">
          <Avatar
            size="3"
            src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
            radius="full"
            fallback="T"
          />
          <Box>
            <Text as="div" size="2" weight="bold">
              Cao Viết Huy
            </Text>
            <Text as="div" size="2" color="gray">
              Tài khoản của bạn
            </Text>
          </Box>
        </Flex>
        <div className="flex items-center w-full h-10 gap-2 rounded-lg bg-[#F4F6F7] px-2">
          <UserIcon className="w-5 h-5" />
          <Text color="gray" className="font-normal text-white">
            Lịch sử in ấn
          </Text>
        </div>
        <div className="flex items-center w-full h-10 gap-2 px-2">
          <ShoppingCartIcon className="w-5 h-5" />
          <Text color="gray" className="font-normal">
            Thiết lập của Admin
          </Text>
        </div>
        {/* <div className="flex items-center w-full h-10 gap-2 px-2">
          <WrenchScrewdriverIcon className="w-5 h-5" />
          <Text color="gray" className="font-normal">
            Thiết lập của Admin
          </Text>
        </div> */}
      </div>
      <div className="flex flex-col w-full h-full">
        <SectionUser />
      </div>
    </div>
  );
};

const SectionUser = () => {
  return (
    <div className="flex flex-col w-[1050px] h-full">
      <h1 className="font-semibold w-full text-3xl">Lịch sử in ấn</h1>
      <div className="w-full h-[1px] bg-[#D8DEE4] my-3" />
    </div>
  );
};

const SupportListItem = ({ text, emailTo, hrefLink }) => {
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
