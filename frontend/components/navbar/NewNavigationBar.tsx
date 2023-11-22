import { Popover } from "@headlessui/react";
import Link from "next/link";
import { Button } from "@radix-ui/themes";

export default function NewNavigationBar() {
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
              Smart Printing Services
            </div>
          </div>
        </Link>

        <div className="items-center justify-end md:flex md:flex-1 lg:w-0 gap-8">
          <Link href={"/admin"}>
            <span className="text-lg font-semibold hover:text-blue-600 cursor-pointer">
              Admin
            </span>
          </Link>

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

          <Link href={"/login"}>
            <Button
              variant="classic"
              className="text-lg font-semibold cursor-pointer"
            >
              Đăng nhập
            </Button>
          </Link>
        </div>
      </div>
    </Popover>
  );
}
