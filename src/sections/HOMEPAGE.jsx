import React from "react";
import "../App.css";

// computer image
import computer from "../assets/main_komp.png";
import TextTranslater from "../components/textTranslater";
import Btn from "../components/btn";

export default function HOMEPAGE() {
  return (
    <div className={`homepage  bg-cover md:py-[130px] py-[100px] `}>
      <div className="container flex sm:flex-row flex-col  gap-[20px] justify-between items-center ">

      <div data-aos="fade-down">
      <div className="home-left text-white flex flex-col sm:items-start items-center gap-[15px] md9:max-w-[500px] w-[100%] ">
            <TextTranslater txt='home-title' txt_styles='  font-[600] md:leading-[39px] leading-[26px] md:text-[30px] text-[22px] sm:text-left text-center ' />
            <TextTranslater txt='home-txt' txt_styles=' text-gray-300 md:leading-[23px] leading-[20px] md:text-[17px] text-[16px] sm:text-left text-center ' />
            <Btn txt='aloqa-btn' btn_styles=" rounded-[25px] px-[13px] py-[7px] w-[100px] md:text-[18px] font-[600] " />
        </div>
      </div>


        <div className="home-right  ">
          <img
            src={computer}
            loading="lazy"
            className="sm:w-[100%] w-[70%] m-auto my-[20px]  h-auto "
            alt="computer-image"
          />
        </div>

      </div>
    </div>
  );
}
