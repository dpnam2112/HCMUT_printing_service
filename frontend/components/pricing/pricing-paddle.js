import Link from "next/link";

export default function PricingPaddle() {
  return (
    <div className="flex flex-col text-center w-full mb-20 mt-5 text-body">
      <p className="mx-auto leading-relaxed text-sm text-gray-700">
        Giá theo đơn vị VNĐ, chưa bao gồm thuế.
      </p>
      <p className="mx-auto leading-relaxed text-sm text-gray-700 mt-1">
        Thanh toán thông qua{" "}
        <Link href="https://paddle.com">
          <a className="text-blue-500 hover:underline">BK Pay.</a>
        </Link>
      </p>
    </div>
  );
}
