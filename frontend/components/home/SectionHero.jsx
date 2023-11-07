
export default function SectionHero() {
  return (
    <div className="w-full md:pt-16 md:pb-10 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center ">
        <div className="text-4xl font-bold leading-relaxed md:heroTitle text-[#1a1523]">
          <h1 className="">
            Hiện Đại và <span className="">Bảo Mật</span>
          </h1>
          <h1 className="mb-6">Smart Printing Service</h1>
        </div>
        <div className="text-xl font-display leading-relaxed md:heroLead mb-6 text-gray-500 lg:px-40">
          <p>
            Đừng để việc in tài liệu cản trở công việc của bạn.
            <br /> Với Smart Printing Service, giúp bạn in tài liệu mọi lúc mọi
            nơi chỉ với một cú click chuột.
          </p>
        </div>
      </div>
    </div>
  );
}
