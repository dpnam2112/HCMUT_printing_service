import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ArrowTopRightOnSquareIcon,
  XMarkIcon,
  BookOpenIcon,
  RssIcon,
  PencilIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@radix-ui/themes";

const solutions = [
  {
    name: "Proxyman for MacOS",
    description:
      "A Native web debugging proxy app. Built for macOS & Apple Silicon Chip. ",
    href: "/",
    icon: ComputerDesktopIcon,
  },
  {
    name: "Proxyman for iOS",
    description:
      "A Standalone iOS app of Proxyman. Capture HTTP(s) traffic without a Mac.",
    href: "/ios",
    icon: DevicePhoneMobileIcon,
  },
];
const resources = [
  {
    name: "Documentation",
    href: "https://docs.proxyman.io/",
    icon: BookOpenIcon,
    isExternalLink: true,
  },
  {
    name: "Github",
    href: "https://github.com/ProxymanApp/Proxyman",
    icon: ArrowTopRightOnSquareIcon,
    isExternalLink: true,
  },
  {
    name: "Changelog",
    href: "/changelog",
    icon: RssIcon,
    isExternalLink: false,
  },
  {
    name: "Blogs",
    href: "/blogs",
    icon: PencilIcon,
    isExternalLink: false,
  },
];

export default function NewNavigationBar() {
  const downloadURL = () => {};
  const downloadBtnOnClicked = (e) => {};

  return (
    <Popover className="relative">
      {/* <div className="w-full px-6 md:px-24 lg:px-60 py-6 flex flex-wrap justify-between items-center"> */}
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
            highContrast
          >
            Đăng nhập
          </Button>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    src="/assets/images/AppIcon_v2.png"
                    alt="Proxyman Logo v2"
                    width="50"
                    height="50"
                    objectFit="contain"
                    priority
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid grid-cols-1 gap-7">
                  {solutions.map((solution) => (
                    <Link
                      key={solution.name}
                      href={solution.href}
                      className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                    >
                      <div className="text-base font-medium text-gray-900">
                        {solution.name}
                      </div>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="/pricing"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Buy Papers
                </Link>
              </div>
              <div className="mt-10">
                <a
                  onClick={downloadBtnOnClicked}
                  href={""}
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
