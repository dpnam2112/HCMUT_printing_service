import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@radix-ui/themes";

export default function NewNavigationBar() {
  const downloadBtnOnClicked = (e: any) => {};

  return (
    <Popover className="relative">
      <div className="w-full mx-auto max-w-9xl py-6 px-6 lg:px-8 flex justify-between items-center">
        <Link href="/">
          <div className="flex justify-start items-center lg:w-0 lg:flex-1 hover:cursor-pointer">
            <img
              src="/assets/images/logo_bachkhoa2.svg"
              className="w-28 h-28"
            />
            <div className="text-3xl font-bold text-[#1f2937]">
              Smart Printing Service
            </div>
          </div>
        </Link>
        <div className="-my-2 -mr-2 md:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>

        <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0 gap-8">
          <span className="text-lg font-semibold hover:text-blue-600 cursor-pointer">
            Đánh giá
          </span>

          <Link href={"/support"}>
            <span className="text-lg font-semibold hover:text-blue-600 cursor-pointer">
              Liên hệ
            </span>
          </Link>

          <Link href={"/pricing"}>
            <span className="text-lg font-semibold hover:text-blue-600 cursor-pointer">
              Mua giấy
            </span>
          </Link>

          <Button
            variant="classic"
            className="text-lg font-semibold cursor-pointer"
          >
            Đăng nhập
          </Button>
        </div>
      </div>
    </Popover>
  );
}
