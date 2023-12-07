import Container from "../components/container";
import Layout from "../components/layout";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Dialog } from "@radix-ui/themes";
import PricingDialogA4 from "../components/pricing/pricing-dialog-a4";
import PricingDialogA3 from "../components/pricing/pricing-dialog-a3";
import { UserInfo } from "../models/types";
import { useEffect, useState } from "react";
import networkService from "../models/network-service";
import toast from "react-hot-toast";
import PricingConfirmDialog from "../components/pricing/pricing-confirm-dialog";

type Props = {
  userInfo: UserInfo | undefined;
};

export default function Pricing() {
  const [userInfo, setUserInfo] = useState<UserInfo | undefined>(undefined);

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    const newUserInfo = await networkService.getUserInfo();
    setUserInfo(newUserInfo);
  };

  return (
    <Layout preview={{}}>
      <Container>
        <PricingHeader2 userInfo={userInfo} />
        <div className="flex flex-col">
          <div className="pricingSectionWrapper">
            <StandardLincenseComponent2 userInfo={userInfo} />
            <PersonalLicenseComponent2 userInfo={userInfo} />
            <TeamLicenseComponent2 userInfo={userInfo} />
          </div>
          <div className="pricingSectionWrapper">
            <StandardLincenseComponent3 userInfo={userInfo} />
            <PersonalLicenseComponent3 userInfo={userInfo} />
            <TeamLicenseComponent3 userInfo={userInfo} />
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

const PricingHeader2 = ({ userInfo }: { userInfo: UserInfo }) => {
  return (
    <div className="m-0 md:pt-16 md:pb-10 text-center">
      <h2 className="mb-6 text-4xl font-bold leading-relaxed md:heroTitle text-[#1a1523]">
        {userInfo
          ? `Bạn hiện đang có ${userInfo.page_balance} tờ giấy!`
          : "Bạn đang cần giấy in?"}
      </h2>
      <p className="text-xl font-display leading-relaxed md:heroLead text-gray-500">
        Chúng tôi có rất nhiều combo giấy in phù hợp với nhu cầu của bạn.
      </p>
    </div>
  );
};

const StandardLincenseComponent2 = ({ userInfo }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <section className="pricingSection">
      <h3 className="mt-5 font-bold text-2xl">Mua giấy A4 theo số lượng</h3>
      <p className="mt-5 text-base text-gray-500 font-display">
        Thích hợp <span className="font-bold text-gray-700">cho 1 lần in</span>{" "}
        với 1 người.
      </p>
      <p className="order-first font-display text-5xl font-semibold tracking-tight">
        240 VNĐ / 1 tờ
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

      <Dialog.Root open={open}>
        <Dialog.Trigger>
          <button
            onClick={() => {
              setOpen(true);
            }}
            className="group inline-flex items-center justify-center rounded-lg py-3 px-4 mt-8 bg-[#506FE0] text-white ring-1 ring-inset ring-gray-200 font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:bg-[#506FE0]/90 hover:text-white"
          >
            Mua ngay
          </button>
        </Dialog.Trigger>
        <PricingDialogA4
          handleClose={() => {
            setOpen(false);
          }}
        />
      </Dialog.Root>
    </section>
  );
};

const PersonalLicenseComponent2 = ({ userInfo }: Props) => {
  const [open, setOpen] = useState(false);

  const handleOnClick = async () => {
    if (!userInfo) {
      toast.error("Vui lòng đăng nhập để tiến hành mua giấy!");
      return;
    }
    setOpen(true);
  };

  return (
    <section className="pricingFeaturedSection">
      <h3 className="mt-5 font-bold text-2xl">150 tờ A4</h3>
      <div className="bg-[#506FE0] px-3 py-1 text-white rounded-full text-base font-semibold shadow-lg shadow-gray-900/5 absolute -top-3 right-5">
        Khuyên mua
      </div>
      <p className="mt-5 text-base text-gray-500 font-display">
        Thích hợp cho <span className="font-bold text-gray-700">1 học kỳ</span>{" "}
        với <span className="">nhóm 2 người.</span>
      </p>
      <p className="order-first font-display text-5xl font-semibold tracking-tight">
        <span>36.000 VNĐ</span>
      </p>

      <ul className="mt-10 order-last flex flex-col gap-y-3 text-sm">
        <li className="flex items-center gap-2">
          <CheckCircleIcon className="h-6 w-6 text-gray-800" />
          Phù hợp cho nhóm 2 người.
        </li>
      </ul>
      <Dialog.Root open={open}>
        <Dialog.Trigger>
          <button
            onClick={handleOnClick}
            className="group inline-flex items-center justify-center rounded-lg bg-[#506FE0] text-white py-3 px-4 mt-8 ring-1 ring-inset ring-gray-200 font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:bg-[#506FE0]/90 hover:text-white"
          >
            Mua ngay
          </button>
        </Dialog.Trigger>
        <PricingConfirmDialog
          title="Xác nhận mua 150 tờ A4"
          quantityA3={0}
          quantityA4={150}
          handleClose={() => {
            setOpen(false);
          }}
        />
      </Dialog.Root>
    </section>
  );
};

const TeamLicenseComponent2 = ({ userInfo }: Props) => {
  const [open, setOpen] = useState(false);

  const handleOnClick = async () => {
    if (!userInfo) {
      toast.error("Vui lòng đăng nhập để tiến hành mua giấy!");
      return;
    }

    setOpen(true);
  };

  return (
    <section className="pricingFeaturedSection">
      <h3 className="mt-5 font-bold text-2xl">300 tờ A4</h3>
      <p className="mt-5 text-base text-gray-500 font-display">
        Thích hợp cho <span className="text-gray-700 font-bold">1 năm học</span>{" "}
        với nhóm 2 người.
      </p>
      <p className="order-first font-display text-5xl font-semibold tracking-tight">
        72.000 VNĐ
      </p>
      <ul className="pricingListWrapper">
        <li className="flex items-center gap-2">
          <CheckCircleIcon className="h-6 w-6 text-gray-800" />
          Phù hợp nhóm 4 người.
        </li>
      </ul>
      <Dialog.Root open={open}>
        <Dialog.Trigger>
          <button
            onClick={handleOnClick}
            className="group inline-flex items-center justify-center rounded-lg bg-[#506FE0] text-white py-3 px-4 mt-8 ring-1 ring-inset ring-gray-200 font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:bg-[#506FE0]/90 hover:text-white"
          >
            Mua ngay
          </button>
        </Dialog.Trigger>
        <PricingConfirmDialog
          title="Xác nhận mua 300 tờ A4"
          quantityA3={0}
          quantityA4={300}
          handleClose={() => {
            setOpen(false);
          }}
        />
      </Dialog.Root>
    </section>
  );
};

const StandardLincenseComponent3 = ({ userInfo }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <section className="pricingSection">
      <h3 className="mt-5 font-bold text-2xl">Mua giấy A3 theo số lượng</h3>
      <p className="mt-5 text-base text-gray-500 font-display">
        Thích hợp <span className="font-bold text-gray-700">cho 1 lần in</span>{" "}
        với 1 người.
      </p>
      <p className="order-first font-display text-5xl font-semibold tracking-tight">
        480 VNĐ / 1 tờ
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
      <Dialog.Root open={open}>
        <Dialog.Trigger>
          <button
            onClick={() => {
              setOpen(true);
            }}
            className="group inline-flex items-center justify-center rounded-lg py-3 px-4 mt-8 bg-[#506FE0] text-white ring-1 ring-inset ring-gray-200 font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:bg-[#506FE0]/90 hover:text-white"
          >
            Mua ngay
          </button>
        </Dialog.Trigger>
        <PricingDialogA3
          handleClose={() => {
            setOpen(false);
          }}
        />
      </Dialog.Root>
    </section>
  );
};

const PersonalLicenseComponent3 = ({ userInfo }: Props) => {
  const [open, setOpen] = useState(false);

  const handleOnClick = async () => {
    if (!userInfo) {
      toast.error("Vui lòng đăng nhập để tiến hành mua giấy!");
      return;
    }
    setOpen(true);
  };

  return (
    <section className="pricingFeaturedSection">
      <h3 className="mt-5 font-bold text-2xl">150 tờ A3</h3>
      <div className="bg-[#506FE0] px-3 py-1 text-white rounded-full text-base font-semibold shadow-lg shadow-gray-900/5 absolute -top-3 right-5">
        Khuyên mua
      </div>
      <p className="mt-5 text-base text-gray-500 font-display">
        Thích hợp cho <span className="font-bold text-gray-700">1 học kỳ</span>{" "}
        với <span className="">nhóm 2 người.</span>
      </p>
      <p className="order-first font-display text-5xl font-semibold tracking-tight">
        <span>72.000 VNĐ</span>
      </p>

      <ul className="mt-10 order-last flex flex-col gap-y-3 text-sm">
        <li className="flex items-center gap-2">
          <CheckCircleIcon className="h-6 w-6 text-gray-800" />
          Phù hợp cho nhóm 2 người.
        </li>
      </ul>
      <Dialog.Root open={open}>
        <Dialog.Trigger>
          <button
            onClick={handleOnClick}
            className="group inline-flex items-center justify-center rounded-lg bg-[#506FE0] text-white py-3 px-4 mt-8 ring-1 ring-inset ring-gray-200 font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:bg-[#506FE0]/90 hover:text-white"
          >
            Mua ngay
          </button>
        </Dialog.Trigger>
        <PricingConfirmDialog
          title="Xác nhận mua 150 tờ A3"
          quantityA3={150}
          quantityA4={0}
          handleClose={() => {
            setOpen(false);
          }}
        />
      </Dialog.Root>
    </section>
  );
};

const TeamLicenseComponent3 = ({ userInfo }: Props) => {
  const [open, setOpen] = useState(false);

  const handleOnClick = async () => {
    if (!userInfo) {
      toast.error("Vui lòng đăng nhập để tiến hành mua giấy!");
      return;
    }
    setOpen(true);
  };

  return (
    <section className="pricingFeaturedSection">
      <h3 className="mt-5 font-bold text-2xl">300 tờ A3</h3>

      <p className="mt-5 text-base text-gray-500 font-display">
        Thích hợp cho <span className="text-gray-700 font-bold">1 năm học</span>{" "}
        với nhóm 2 người.
      </p>
      <p className="order-first font-display text-5xl font-semibold tracking-tight">
        144.000 VNĐ
      </p>
      <ul className="pricingListWrapper">
        <li className="flex items-center gap-2">
          <CheckCircleIcon className="h-6 w-6 text-gray-800" />
          Phù hợp nhóm 4 người.
        </li>
      </ul>
      <Dialog.Root open={open}>
        <Dialog.Trigger>
          <button
            onClick={handleOnClick}
            className="group inline-flex items-center justify-center rounded-lg bg-[#506FE0] text-white py-3 px-4 mt-8 ring-1 ring-inset ring-gray-200 font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:bg-[#506FE0]/90 hover:text-white"
          >
            Mua ngay
          </button>
        </Dialog.Trigger>
        <PricingConfirmDialog
          title="Xác nhận mua 300 tờ A3"
          quantityA3={300}
          quantityA4={0}
          handleClose={() => {
            setOpen(false);
          }}
        />
      </Dialog.Root>
    </section>
  );
};
