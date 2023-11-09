import React from "react";

const PageContainer = ({
  layout,
  children,
  width,
  title,
  subTitle,
  secondSubTitle,
}) => {
  return (
    <div
      className={layout === "center" ? "center-container" : "left-container"}
    >
      <div className={`w-full flex flex-col`}>
        <PageHeader
          layout={layout}
          title={title}
          subTitle={subTitle}
          secondSubTitle={secondSubTitle}
        />
        {children}
      </div>
    </div>
  );
};

const PageHeader = ({ layout, title, subTitle, secondSubTitle }) => {
  return (
    <div className={layout === "center" ? "center-header" : "left-header"}>
      <h1
        className={`text-title ${
          layout === "center" ? "text-center" : "text-left"
        }`}
      >
        {title}
      </h1>
      <p
        className={`text-subtitle leading-10 mt-3 w-full ${
          layout === "center" ? "text-center" : "text-left"
        }`}
      >
        {subTitle}
      </p>
      <p
        className={`text-subtitle leading-10 w-full ${
          layout === "center" ? "text-center" : "text-left"
        }`}
      >
        {secondSubTitle}
      </p>
    </div>
  );
};

export default PageContainer;
