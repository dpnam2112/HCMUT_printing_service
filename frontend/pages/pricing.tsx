import Container from "../components/container";
import Layout from "../components/layout";
import PricingPaddle from "../components/pricing/pricing-paddle";
import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function Pricing() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const standardLicenseBtnOnClick = (e) => {};

  const personalLicenseBtnOnClick = (e) => {};

  return (
    <>
      <Layout>
        <Container>
          <PricingHeader2 />
          <div className="pricingSectionWrapper">
            <StandardLincenseComponent2
              standardLicenseBtnOnClick={standardLicenseBtnOnClick}
            />
            <PersonalLicenseComponent2
              personalLicenseBtnOnClick={personalLicenseBtnOnClick}
            />
            <TeamLicenseComponent2 openModal={openModal} />
          </div>
          <PricingPaddle></PricingPaddle>
          <section className="text-gray-600 body-font overflow-hidden">
            <div className="container mx-auto"></div>
          </section>
        </Container>
      </Layout>
    </>
  );
}

const PricingHeader2 = () => {
  return (
    <div className="m-0 md:pt-16 md:pb-10 text-center">
      <h2 className="mb-6 text-4xl font-bold leading-relaxed md:heroTitle text-[#1a1523]">
        Combo giấy cho cá nhân hoặc nhóm bạn.
      </h2>
      <p className="text-xl font-display leading-relaxed md:heroLead text-gray-500">
        Bất kể 1 học kỳ hoặc 2 học kỳ, chúng tôi đều có combo cho bạn.
      </p>
    </div>
  );
};

const StandardLincenseComponent2 = ({ standardLicenseBtnOnClick }) => {
  return (
    <section className="pricingSection">
      <h3 className="mt-5 font-bold text-2xl">Mua theo số lượng</h3>
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
        <li className="flex items-center gap-2">
          <CheckCircleIcon className="h-6 w-6 text-gray-800" />
          <div className="relative w-4/5 flex flex-col items-start group">
            <span>Miễn phí đổi trả trong vòng 1 tuần.</span>
          </div>
        </li>

        <li className="flex justify-start items-center gap-2">
          <div className="relative w-4/5 flex flex-col items-start group"></div>
        </li>
      </ul>
      <button
        className="group inline-flex items-center justify-center rounded-lg py-3 px-4 mt-8 bg-[#1F2D5C] text-white ring-1 ring-inset ring-gray-200 font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:bg-gray-900 hover:text-white"
        onClick={standardLicenseBtnOnClick}
      >
        Mua theo số lượng
      </button>
    </section>
  );
};

const PersonalLicenseComponent2 = ({ personalLicenseBtnOnClick }) => {
  return (
    <section className="pricingFeaturedSection">
      <h3 className="mt-5 font-bold text-2xl">150 tờ A4</h3>
      <div className="bg-[#1F2D5C] px-3 py-1 text-white rounded-full text-base font-semibold shadow-lg shadow-gray-900/5 absolute -top-3 right-5">
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
        <li className="flex items-center gap-2">
          <CheckCircleIcon className="h-6 w-6 text-gray-800" />
          <div className="relative w-4/5 flex flex-col items-start group">
            <span>Miễn phí đổi trả trong vòng 1 tháng.</span>
          </div>
        </li>
      </ul>
      <button
        className="group inline-flex items-center justify-center rounded-lg py-3 px-4 mt-8 bg-[#1F2D5C] text-white shadow-sm hover:bg-gray-900 font-semibold"
        onClick={personalLicenseBtnOnClick}
      >
        Mua 150 tờ A4
      </button>
    </section>
  );
};

const TeamLicenseComponent2 = ({ openModal }) => {
  return (
    <section className="pricingSection">
      <h3 className="mt-5 font-bold text-2xl">300 tờ A4</h3>
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
        <li className="flex items-center gap-2">
          <CheckCircleIcon className="h-6 w-6 text-gray-800" />
          <div className="relative w-4/5 flex flex-col items-start group">
            <span>Miễn phí đổi trả trong 2 tháng.</span>
          </div>
        </li>
      </ul>
      <button
        className="group inline-flex items-center justify-center rounded-lg bg-[#1F2D5C] text-white py-3 px-4 mt-8 ring-1 ring-inset ring-gray-200 font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:bg-gray-900 hover:text-white"
        onClick={openModal}
      >
        Mua 300 tờ A4
      </button>
    </section>
  );
};
