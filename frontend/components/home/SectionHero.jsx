export default function SectionHero() {
  return (
    <div className="w-full md:pt-16 md:pb-10 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center ">
        <div className="text-4xl font-bold leading-relaxed md:heroTitle text-[#1a1523]">
          <h1 className="">Smart Printing Service</h1>
          <h1 className="mb-6">In Tài Liệu Từ Xa</h1>
        </div>
        <div className="text-xl font-display leading-relaxed md:heroLead mb-6 text-gray-500 lg:px-40">
          <p>
            Chọn ngay tài liệu bạn cần in ở section phía dưới.
            <br /> Sau đó hãy cài đặt máy in bạn chọn, nhấn nút 'Hoàn Thành' để
            máy in bắt đầu in.
          </p>
        </div>
      </div>
    </div>
  );
}
