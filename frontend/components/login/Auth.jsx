import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

const Auth = () => {
  return (
    <div className="flex flex-row mt-20 mx-40 max-w-[1700px] min-h-[400px] px-10 py-20 rounded border">
      <div>
        <Tabs.Root
          className="flex flex-col mx-10 w-[400px] shadow-[0_2px_10px] shadow-blackA2"
          defaultValue="tab1"
        >
          <Tabs.List
            className="shrink-0 flex border-b border-mauve6"
            aria-label="Manage your account"
          >
            <Tabs.Trigger
              className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
              value="tab1"
            >
              Đăng nhập
            </Tabs.Trigger>
            <Tabs.Trigger
              className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
              value="tab2"
            >
              Đăng kí
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content
            className="grow p-5 bg-white rounded-b-md outline-none"
            value="tab1"
          >
            <p className="font-bold mb-5 text-mauve11 text-[15px] leading-normal">
              Chào mừng bạn trở lại.
            </p>
            <p className="mb-5 text-mauve11 text-[15px] leading-normal">
              Vui lòng nhập thông tin tài khoản của bạn.
            </p>
            <fieldset className="mb-[20px] w-full flex flex-col justify-start">
              <label
                className="text-[15px] leading-none mb-2.5 text-violet12 block"
                htmlFor="username"
              >
                Tài khoản hoặc Email
              </label>
              <input
                className="grow shrink-0 rounded px-2.5 text-[16px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[40px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                id="username"
                defaultValue=""
                type="text"
              />
            </fieldset>
            <fieldset className="mb-[20px] w-full flex flex-col justify-start">
              <label
                className="text-[16px] leading-none mb-2.5 text-violet12 block"
                htmlFor="password"
              >
                Mật khẩu
              </label>
              <input
                className="grow shrink-0 rounded px-2.5 text-[16px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[40px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                id="password"
                defaultValue=""
                type="password"
                placeholder=""
                required
              />
            </fieldset>
            <div className="flex items-center mb-2">
              <Checkbox.Root
                className="flex h-[20px] w-[20px] items-center justify-center rounded-[4px] bg-gray-100 outline-none shadow-[0_0_0_1.5px_black] focus:shadow-[0_0_0_2px_black]"
                id="c1"
              >
                <Checkbox.Indicator className="text-violet11">
                  <CheckIcon />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label
                className="pl-[10px] text-[15px] leading-none text-gray-700"
                htmlFor="c1"
              >
                Lưu thông tin đăng nhập
              </label>
            </div>
            <p
              id="helper-checkbox-text"
              className="text-xs font-normal leading-5 text-gray-500 dark:text-gray-400"
            >
              Chúng tôi cam kết không thu thập thông tin cá nhân của bạn. Vui
              lòng đọc{" "}
              <a
                href="#"
                className="font-medium text-blue-500 hover:underline dark:text-blue-400"
              >
                Chính sách bảo mật
              </a>{" "}
              của chúng tôi.
            </p>

            <div className="flex justify-end mt-5">
              <button className="inline-flex items-center justify-center w-[400px] rounded px-[15px] text-[15px] leading-none font-medium h-[40px] bg-black text-white hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default">
                Đăng nhập
              </button>
            </div>
            <div
              className="font-bold text-[15px] text-center text-blue-800 mt-3 leading-5 items-center  dark:text-gray-400 hover:underline hover:underline-offset-2"
              htmlFor="c1"
            >
              <a
                href="http://localhost:3000/forgotpassword"
                className="text-blue-600"
              >
                Quên mật khẩu?
              </a>
            </div>
          </Tabs.Content>
          <Tabs.Content
            className="grow p-5 bg-white rounded-b-md outline-none"
            value="tab2"
          >
            <p className="mb-5 font-bold text-mauve11 text-[15px] leading-normal">
              Đăng kí tài khoản mới.
            </p>
            <fieldset className="mb-[20px] w-full flex flex-col justify-start">
              <label
                className="text-[15px] leading-none mb-2.5 text-violet12 block"
                htmlFor="email"
              >
                Tên tài khoản
              </label>
              <input
                className="grow shrink-0 rounded px-2.5 text-[16px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[40px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                id="Email"
                type="text"
                placeholder="username"
                required
              />
            </fieldset>
            <fieldset className="mb-[20px] w-full flex flex-col justify-start">
              <label
                className="text-[15px] leading-none mb-2.5 text-violet12 block"
                htmlFor="username"
              >
                Email
              </label>
              <input
                className="grow shrink-0 rounded px-2.5 text-[16px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[40px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                id="username"
                type="text"
                placeholder="abc@example.com"
                required
              />
            </fieldset>
            <fieldset className="mb-[20px] w-full flex flex-col justify-start">
              <label
                className="text-[15px] leading-none mb-2.5 text-violet12 block"
                htmlFor="newPassword"
              >
                Mật khẩu
              </label>
              <input
                className="grow shrink-0 rounded px-2.5 text-[16px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[40px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                id="newPassword"
                type="password"
                placeholder="•••••••••"
                required
              />
            </fieldset>
            <fieldset className="mb-[20px] w-full flex flex-col justify-start">
              <label
                className="text-[15px] leading-none mb-2.5 text-violet12 block"
                htmlFor="confirmPassword"
              >
                Nhập lại mật khẩu
              </label>
              <input
                className="grow shrink-0 rounded px-2.5 text-[16px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[40px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                id="confirmPassword"
                type="password"
                placeholder="•••••••••"
                required
              />
            </fieldset>{" "}
            <label
              className="font-semibold text-[15px] text-gray-500 dark:text-gray-400"
              htmlFor="c1"
            >
              Khi bạn nhấn vào nút Đăng kí, Bạn đồng ý với{" "}
              <a
                href="http://localhost:3000/terms-of-use"
                className="font-bold text-blue-600/[.9] dark:text-blue-500/[.9] hover:underline"
              >
                điều khoản và điều kiện sử dụng dịch vụ.
              </a>
            </label>
            <div className="flex justify-end mt-5">
              <button className="inline-flex items-center justify-center w-[400px] rounded px-[15px] text-[15px] leading-none font-medium h-[40px] bg-black text-white hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default">
                Đăng kí
              </button>
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </div>
      <div className="w-full max-h-full  flex flex-col items-center justify-start text-center">
        <img src="/assets/images/logo_bachkhoa2.svg" className="w-full h-40" />
        <div className="text-3xl text-[32px] font-serif antialiased font-bold font-display mb-5 text-gray-600 lg:px-40">
          HCMUT SMART PRINTING SERVICE AUTHENTICATION
        </div>
        <div className="text-xl font-semibold tracking-wide font-display mb-5 text-[#7a7a7a] lg:px-40 ">
          Giúp bạn tiết kiệm thời gian với việc in ấn từ xa
        </div>
        <div className="text-xl font-display mb-12 text-blue-800 lg:px-40">
          Hỗ trợ kĩ thuật:{" "}
          <span className="underline underline-offset-2">
            support@sps.hcmut.edu.vn
          </span>
        </div>
        <div className="text-s font-display tracking-tight mt-10 mb-3 text-gray-500 lg:px-40">
          @Copyright 2023 Đại học Bách Khoa TPHCM
        </div>
      </div>
    </div>
  );
};

export default Auth;
