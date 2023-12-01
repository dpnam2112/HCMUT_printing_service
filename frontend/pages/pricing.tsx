import Container from "../components/container";
import Layout from "../components/layout";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Dialog } from "@radix-ui/themes";
import PricingDialogA4 from "../components/pricing/pricing-dialog-a4";
import PricingDialogA3 from "../components/pricing/pricing-dialog-a3";

export default function Pricing() {
  return (
    <Layout preview={{}}>
      <Container>
        <PricingHeader2 />
        <div className="flex flex-col">
          <div className="pricingSectionWrapper">
            <StandardLincenseComponent2 />
            <PersonalLicenseComponent2 />
            <TeamLicenseComponent2 />
          </div>
          <div className="pricingSectionWrapper">
            <StandardLincenseComponent3 />
            <PersonalLicenseComponent3 />
            <TeamLicenseComponent3 />
          </div>
        </div>

        <div className="flex flex-col text-center w-full mb-20 mt-5 text-body">
          <p className="mx-auto leading-relaxed text-sm text-gray-700">
            Giá theo đơn vị VNĐ, không bao gồm thuế.
          </p>
          <p className="mx-auto leading-relaxed text-sm text-gray-700 mt-1">
            Thanh toán thông qua{" "}
            <Link href="https://www.paypal.com/vn/home?locale.x=vi_VN">
              <a className="text-blue-500 hover:underline">Pay Pal</a>
            </Link>
          </p>
        </div>
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container mx-auto"></div>
        </section>
      </Container>
    </Layout>
  );
}

const PricingHeader2 = () => {
  return (
    <div className="m-0 md:pt-16 md:pb-10 text-center">
      <h2 className="mb-6 text-4xl font-bold leading-relaxed md:heroTitle text-[#1a1523]">
        Bạn đang cần giấy in?
      </h2>
      <p className="text-xl font-display leading-relaxed md:heroLead text-gray-500">
        Chúng tôi có rất nhiều combo giấy in phù hợp với nhu cầu của bạn.
      </p>
    </div>
  );
};

const StandardLincenseComponent2 = () => {
  return (
    <section className="pricingSection">
      <h3 className="mt-5 font-bold text-2xl">Mua giấy A4 theo số lượng</h3>
      <p className="mt-5 text-base text-gray-500 font-display">
        Thích hợp <span className="font-bold text-gray-700">cho 1 lần in</span>{" "}
        với 1 người.
      </p>
      <p className="order-first font-display text-5xl font-semibold tracking-tight">
        600 VNĐ / 1 tờ
      </p>
      <ul className="pricingListWrapper">
        <li className="flex items-center gap-2">
          <CheckCircleIcon className="h-6 w-6 text-gray-800" />
          Phù hợp cho 1 người.
        </li>

        <li className="flex justify-start items-center gap-2">
          <div className="relative w-4/5 flex flex-col items-start group"></div>
        </li>
      </ul>
      <Dialog.Root>
        <Dialog.Trigger>
          <button className="group inline-flex items-center justify-center rounded-lg py-3 px-4 mt-8 bg-[#506FE0] text-white ring-1 ring-inset ring-gray-200 font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:bg-[#506FE0]/90 hover:text-white">
            Mua ngay
          </button>
        </Dialog.Trigger>
        <PricingDialogA4 />
      </Dialog.Root>
    </section>
  );
};

const PersonalLicenseComponent2 = () => {
  return (
    <section className="pricingFeaturedSection">
      <h3 className="mt-5 font-bold text-2xl">150 tờ A4</h3>
      <div className="bg-[#506FE0] px-3 py-1 text-white rounded-full text-base font-semibold shadow-lg shadow-gray-900/5 absolute -top-3 right-5">
        Tiết kiệm 20%
      </div>
      <p className="mt-5 text-base text-gray-500 font-display">
        Thích hợp cho <span className="font-bold text-gray-700">1 học kỳ</span>{" "}
        với <span className="">nhóm 2 người.</span>
      </p>
      <p className="order-first font-display text-5xl font-semibold tracking-tight">
        <span>70.000 VNĐ</span>
      </p>

      <ul className="mt-10 order-last flex flex-col gap-y-3 text-sm">
        <li className="flex items-center gap-2">
          <CheckCircleIcon className="h-6 w-6 text-gray-800" />
          Phù hợp cho nhóm 2 người.
        </li>
      </ul>
      <button className="group inline-flex items-center justify-center rounded-lg py-3 px-4 mt-8 bg-[#506FE0] text-white shadow-sm hover:bg-[#506FE0]/90 font-semibold">
        Mua ngay
      </button>
    </section>
  );
};

const TeamLicenseComponent2 = () => {
  return (
    <section className="pricingFeaturedSection">
      <h3 className="mt-5 font-bold text-2xl">300 tờ A4</h3>
      <div className="bg-[#506FE0] px-3 py-1 text-white rounded-full text-base font-semibold shadow-lg shadow-gray-900/5 absolute -top-3 right-5">
        Tiết kiệm 40%
      </div>
      <p className="mt-5 text-base text-gray-500 font-display">
        Thích hợp cho <span className="text-gray-700 font-bold">1 năm học</span>{" "}
        với nhóm 2 người.
      </p>
      <p className="order-first font-display text-5xl font-semibold tracking-tight">
        120.000 VNĐ
      </p>
      <ul className="pricingListWrapper">
        <li className="flex items-center gap-2">
          <CheckCircleIcon className="h-6 w-6 text-gray-800" />
          Phù hợp nhóm 4 người.
        </li>
      </ul>
      <button className="group inline-flex items-center justify-center rounded-lg bg-[#506FE0] text-white py-3 px-4 mt-8 ring-1 ring-inset ring-gray-200 font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:bg-[#506FE0]/90 hover:text-white">
        Mua ngay
      </button>
    </section>
  );
};

const StandardLincenseComponent3 = () => {
  return (
    <section className="pricingSection">
      <h3 className="mt-5 font-bold text-2xl">Mua giấy A3 theo số lượng</h3>
      <p className="mt-5 text-base text-gray-500 font-display">
        Thích hợp <span className="font-bold text-gray-700">cho 1 lần in</span>{" "}
        với 1 người.
      </p>
      <p className="order-first font-display text-5xl font-semibold tracking-tight">
        700 VNĐ / 1 tờ
      </p>
      <ul className="pricingListWrapper">
        <li className="flex items-center gap-2">
          <CheckCircleIcon className="h-6 w-6 text-gray-800" />
          Phù hợp cho 1 người.
        </li>

        <li className="flex justify-start items-center gap-2">
          <div className="relative w-4/5 flex flex-col items-start group"></div>
        </li>
      </ul>
      <Dialog.Root>
        <Dialog.Trigger>
          <button className="group inline-flex items-center justify-center rounded-lg py-3 px-4 mt-8 bg-[#506FE0] text-white ring-1 ring-inset ring-gray-200 font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:bg-[#506FE0]/90 hover:text-white">
            Mua ngay
          </button>
        </Dialog.Trigger>
        <PricingDialogA3 />
      </Dialog.Root>
    </section>
  );
};

const PersonalLicenseComponent3 = () => {
  return (
    <section className="pricingFeaturedSection">
      <h3 className="mt-5 font-bold text-2xl">150 tờ A3</h3>
      <div className="bg-[#506FE0] px-3 py-1 text-white rounded-full text-base font-semibold shadow-lg shadow-gray-900/5 absolute -top-3 right-5">
        Tiết kiệm 20%
      </div>
      <p className="mt-5 text-base text-gray-500 font-display">
        Thích hợp cho <span className="font-bold text-gray-700">1 học kỳ</span>{" "}
        với <span className="">nhóm 2 người.</span>
      </p>
      <p className="order-first font-display text-5xl font-semibold tracking-tight">
        <span>90.000 VNĐ</span>
      </p>

      <ul className="mt-10 order-last flex flex-col gap-y-3 text-sm">
        <li className="flex items-center gap-2">
          <CheckCircleIcon className="h-6 w-6 text-gray-800" />
          Phù hợp cho nhóm 2 người.
        </li>
      </ul>
      <button className="group inline-flex items-center justify-center rounded-lg py-3 px-4 mt-8 bg-[#506FE0] text-white shadow-sm hover:bg-[#506FE0]/90 font-semibold">
        Mua ngay
      </button>
    </section>
  );
};

const TeamLicenseComponent3 = () => {
  return (
    <section className="pricingFeaturedSection">
      <h3 className="mt-5 font-bold text-2xl">300 tờ A3</h3>
      <div className="bg-[#506FE0] px-3 py-1 text-white rounded-full text-base font-semibold shadow-lg shadow-gray-900/5 absolute -top-3 right-5">
        Tiết kiệm 45%
      </div>
      <p className="mt-5 text-base text-gray-500 font-display">
        Thích hợp cho <span className="text-gray-700 font-bold">1 năm học</span>{" "}
        với nhóm 2 người.
      </p>
      <p className="order-first font-display text-5xl font-semibold tracking-tight">
        160.000 VNĐ
      </p>
      <ul className="pricingListWrapper">
        <li className="flex items-center gap-2">
          <CheckCircleIcon className="h-6 w-6 text-gray-800" />
          Phù hợp nhóm 4 người.
        </li>
      </ul>
      <button className="group inline-flex items-center justify-center rounded-lg bg-[#506FE0] text-white py-3 px-4 mt-8 ring-1 ring-inset ring-gray-200 font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:bg-[#506FE0]/90 hover:text-white">
        Mua ngay
      </button>
    </section>
  );
};
