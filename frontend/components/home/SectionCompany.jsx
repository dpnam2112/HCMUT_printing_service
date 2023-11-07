import React from "react";
import TitleAndDescriptionSection from "../common/TitleAndDescriptionSection";

const SectionCompany = () => {
  return (
    <div className="mt-5 mb-5 mx-auto max-w-[1700px] h-full flex flex-col items-center">
      <TitleAndDescriptionSection
        title={"Được sử dụng bởi các trường đại học hàng đầu Việt Nam"}
        description={
          "Từ sinh viên năm nhất đến năm cuối, đến các cán bộ quản lý đều tin tưởng và sử dụng mỗi ngày."
        }
      ></TitleAndDescriptionSection>
      <div className="firstSlider">
        <div className="firstSlide grayscale">
          <img
            src="/assets/images/logo_bachkhoa.svg"
            alt="Big C, a Company that uses Proxyman"
          />
          <img
            src="/assets/images/logo_bachkhoa_danang4.svg"
            alt="Big C, a Company that uses Proxyman"
          />
          <img
            src="/assets/images/logo_bachkhoa_danang5.svg"
            alt="Big C, a Company that uses Proxyman"
          />

          <img
            src="/assets/images/logo_daihoc1.svg"
            alt="Big C, a Company that uses Proxyman"
          />
          <img
            src="/assets/images/logo_daihoc2.svg"
            alt="Big C, a Company that uses Proxyman"
          />
          <img
            src="/assets/images/logo_daihoc3.svg"
            alt="Big C, a Company that uses Proxyman"
          />
          <img
            src="/assets/images/logo_bachkhoa_danang6.svg"
            alt="Big C, a Company that uses Proxyman"
          />
          <img
            src="/assets/images/logo_bachkhoa_danang7.svg"
            alt="Big C, a Company that uses Proxyman"
          />
          <img
            src="/assets/images/logo_bachkhoa.svg"
            alt="Big C, a Company that uses Proxyman"
          />
        </div>
      </div>
      <div className="secondSlider">
        <div className="md:secondSlide grayscale mobileSlide">
          <img
            src="/assets/images/logo_bachkhoa.svg"
            alt="Big C, a Company that uses Proxyman"
          />
          <img
            src="/assets/images/logo_hust.svg"
            alt="Big C, a Company that uses Proxyman"
          />
          <img
            src="/assets/images/logo_bachkhoa_danang.svg"
            alt="Big C, a Company that uses Proxyman"
          />
          <img
            src="/assets/images/logo_bachkhoa_danang1.svg"
            alt="Big C, a Company that uses Proxyman"
          />
          <img
            src="/assets/images/logo_bachkhoa_danang1.svg"
            alt="Big C, a Company that uses Proxyman"
          />
          <img
            src="/assets/images/logo_bachkhoa_danang2.svg"
            alt="Big C, a Company that uses Proxyman"
          />
          <img
            src="/assets/images/logo_bachkhoa_danang3.svg"
            alt="Big C, a Company that uses Proxyman"
          />
          <img
            src="/assets/images/logo_bachkhoa.svg"
            alt="Big C, a Company that uses Proxyman"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionCompany;
