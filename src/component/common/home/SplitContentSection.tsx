import React from "react";
import CommonButton from "./CommonButton";

type SplitContentSectionProps = {
  tag: string;
  title: string;
  description: string;
  image: string;
  buttonText?: string;
  onButtonClick?: () => void;
  reverse?: boolean; // image left, text right karva
};

const SplitContentSection: React.FC<SplitContentSectionProps> = ({
  tag,
  title,
  description,
  image,
  buttonText = "Read More",
  reverse = false,
}) => {
  return (
    <section className="relative w-full pt-16 lg:py-32 overflow-hidden">
      {/* BEIGE BACKGROUND BAR */}
      <div
        className={`absolute inset-y-0 ${
          reverse ? "right-0" : "left-0"
        } w-full lg:w-[55%] bg-[#f6eee9]`}
      ></div>

      <div className="relative container mx-auto !px-0">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 items-center gap-12 ${
            reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* TEXT */}
          <div className="lg:col-span-6 relative z-10 text-center px-4 lg:px-0">
            <p className="font-mulish text-[12px] tracking-[0.2em] uppercase mb-3">
              {tag}
            </p>

            <h2 className="font-mulish text-[28px] sm:text-4xl sm:leading-[55px] mb-[25px]">
              {title}
            </h2>

            <p className="font-quattro text-para text-base leading-[26px] mb-[35px] max-w-[498px] mx-auto">
              {description}
            </p>

            {buttonText && (
              <CommonButton>
                {buttonText}
              </CommonButton>
            )}
          </div>

          {/* IMAGE */}
          <div className="lg:col-span-6 relative z-10">
            <img src={image} alt={title} className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitContentSection;
