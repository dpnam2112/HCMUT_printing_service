import Container from "../components/container";
import Layout from "../components/layout";
import PricingPaddle from "../components/pricing/pricing-paddle";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { CheckCircledIcon } from "@radix-ui/react-icons";

export default function Pricing() {
  const [showTeamWarning, setShowTeamWarning] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [numberOfTeamLicense, setNumberOfTeamLicense] = useState(5); // min = 5
  const teamLicensePrice = 69;

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const onSuccessCallback = (data) => {};

  const numberOfTeamLicenseInputChange = (e) => {
    setNumberOfTeamLicense(e.target.value);
  };

  const checkoutTeamLicenseBtnOnClick = (e) => {};

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
            <div className="container mx-auto">
              {/* <KeyFeaturesCompare />
              <DebuggingToolsCompare />
              <ExploreMoreFeaturesButton />
              <PricingFAQ data={data} /> */}
            </div>
          </section>
          {/* <PricingFooter></PricingFooter> */}
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 z-10 overflow-y-auto"
              onClose={closeModal}
            >
              <div className="min-h-screen px-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                {/* This element is to trick the browser into centering the modal contents. */}
                <span
                  className="inline-block h-screen align-middle"
                  aria-hidden="true"
                >
                  &#8203;
                </span>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <div className="inline-block w-full sm:max-w-lg max-w-sm  p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                    <Dialog.Title
                      as="h3"
                      className="text-2xl font-medium leading-6 text-gray-900 text-center"
                    >
                      Team License
                    </Dialog.Title>
                    <div className="grid grid-cols-3 gap-2 my-6 items-center text-body">
                      <div className="col-span-2 font-light">
                        Number of Seats ({">"}=5)
                      </div>
                      <div className="">
                        <div className="rounded-md">
                          <input
                            type="number"
                            name="numberOfSeat"
                            id="numberOfSeat"
                            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full px-4 border-gray-300 rounded-md text-body"
                            placeholder=">= 5"
                            defaultValue="5"
                            min="5"
                            max="100"
                            onChange={numberOfTeamLicenseInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-span-2 my-1 font-light">
                        Price per Seat
                      </div>
                      <div className="text-right pr-2 font-semibold text-3xl">
                        1000 VNĐ / 1 tờ
                      </div>
                      <div className="col-span-2 font-semibold pt-4 text-3xl">
                        Total
                      </div>
                      <div className="text-right pr-2 font-semibold border-t pt-4 text-3xl">
                        ${numberOfTeamLicense * teamLicensePrice}
                      </div>
                    </div>
                    <button
                      className="text-white bg-indigo-600 border-0 py-2 px-4 mt-2 focus:outline-none hover:bg-indigo-700 rounded text-body font-light w-full text-center"
                      onClick={checkoutTeamLicenseBtnOnClick}
                    >
                      Checkout
                    </button>
                    <p className="leading-relaxed text-sm text-gray-500 text-center mt-2">
                      Giá theo đơn vị VNĐ, chưa bao gồm thuế.
                    </p>
                    {showTeamWarning && (
                      <p className="text-body mt-2 text-red-500 text-center">
                        Number of license must be equal or greater than 3.
                      </p>
                    )}
                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition>
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
