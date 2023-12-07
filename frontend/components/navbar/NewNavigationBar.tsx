import { Popover } from "@headlessui/react";
import Link from "next/link";
import { Button } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { UserInfo } from "../../models/types";
import networkService from "../../models/network-service";

export default function NewNavigationBar() {
  const [userInfo, setUserInfo] = useState<UserInfo | undefined>(undefined);

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    const newUserInfo = await networkService.getUserInfo();
    setUserInfo(newUserInfo);
  };

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

        <div className="items-center justify-end md:flex md:flex-1 lg:w-0 gap-8">
          <Link href={"/pricing"}>
            <span className="text-lg font-semibold hover:text-blue-600 cursor-pointer">
              Mua giấy
            </span>
          </Link>

          {userInfo && userInfo.is_admin && (
            <Link href={"/admin"}>
              <span className="text-lg font-semibold hover:text-blue-600 cursor-pointer">
                SPSO
              </span>
            </Link>
          )}

          {userInfo && !userInfo.is_admin && (
            <Link href={"/profile"}>
              <span className="text-lg font-semibold hover:text-blue-600 cursor-pointer">
                Hồ sơ
              </span>
            </Link>
          )}

          <Link href={"/support"}>
            <span className="text-lg font-semibold hover:text-blue-600 cursor-pointer">
              Liên hệ
            </span>
          </Link>

          <Link
            href={
              userInfo
                ? "http://localhost:8000/accounts/logout/"
                : "http://localhost:8000/accounts/login/"
            }
          >
            <Button
              variant="classic"
              className="text-lg font-semibold cursor-pointer"
            >
              {userInfo ? "Đăng xuất" : "Đăng nhập"}
            </Button>
          </Link>
        </div>
      </div>
    </Popover>
  );
}
