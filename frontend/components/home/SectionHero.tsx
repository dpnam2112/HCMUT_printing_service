export default function SectionHero() {
  return (
    <div className="w-full md:pt-16 md:pb-10 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center ">
        <div className="text-4xl font-bold leading-relaxed md:heroTitle text-[#1a1523]">
          <h1 className="">In tài liệu từ xa với</h1>
          <h1 className="mb-6">Smart Printing Service</h1>
        </div>
        <div className="text-xl font-display leading-relaxed md:heroLead mb-6 text-gray-500 lg:px-40">
          <p>
            Để in tài liệu hãy chọn tệp bạn cần in ở section phía dưới.
            <br /> Sau đó hãy lựa chọn máy in và điều chỉnh cấu hình máy in của
            bạn.
          </p>
        </div>
      </div>
    </div>
  );
}
