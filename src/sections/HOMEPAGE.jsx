import React, { useEffect, useState } from "react";
import "../App.css";
import TextTranslater from "../components/textTranslater";
import Btn from "../components/btn";
import Marquee from "react-fast-marquee";

// computer image , icons
import computer from "../assets/main_komp.png";
import left1 from "../assets/faq__img1.png";
import left2 from "../assets/faq__img2.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Our_works from "./our_works";
import Our_benefits from "./our_benefits";

export default function HOMEPAGE() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className={`homepage  bg-cover md:py-[130px] py-[100px] `}>
        <div className="container flex sm:flex-row flex-col  gap-[20px] justify-between items-center ">
          <div data-aos="fade-down">
            <div className="home-left text-white flex flex-col sm:items-start items-center gap-[15px] max-w-[500px] w-[100%] ">
              <TextTranslater
                txt="home-title"
                txt_styles="  font-[600] md:leading-[39px] leading-[26px] md:text-[30px] text-[22px] sm:text-left text-center "
              />
              <TextTranslater
                txt="home-txt"
                txt_styles=" text-gray-300 md:leading-[23px] leading-[20px] md:text-[17px] text-[16px] sm:text-left text-center "
              />
              <Btn
                txt="aloqa-btn"
                btn_styles=" rounded-[25px] px-[13px] py-[7px] w-[100px] md:text-[18px] font-[600] "
              />
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

      {/* FAQ section */}
      <Faq />

      <Marquee
        gradient={false}
        speed={100}
        className="flex gap-[50px] items-center "
      >
        <div className="flex gap-[50px] mb-[30px] items-center ">
          <TextTranslater txt="scroll1" txt_styles=" text-white text-[25px] " />
          <p className="text-white text-[18px]">/</p>
          <TextTranslater txt="scroll2" txt_styles=" text-white text-[25px] " />
          <p className="text-white text-[18px]">/</p>
          <TextTranslater txt="scroll3" txt_styles=" text-white text-[25px] " />
          <p className="text-white text-[18px]">/</p>
          <TextTranslater txt="scroll4" txt_styles=" text-white text-[25px] " />
        </div>
      </Marquee>

      <Our_works />

      <Our_benefits in_home={true} />
    </div>
  );
}

function Faq() {
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  return (
    <div className="faq_section sm:py-[100px] py-[40px] ">
      <div className="container flex lg:flex-row flex-col xl:justify-between justify-around items-center gap-[30px] ">
        <div className="faq-left flex lg:justify-start justify-center gap-[20px] max-xl:w-[100%] w-auto  ">
          <img
            src={left1}
            loading="lazy"
            className="mb-[70px] max-xl:w-[250px] max-sm:w-[45%] h-auto "
            alt="faq-image-1"
          />
          <img
            src={left2}
            loading="lazy"
            className="mt-[40px] max-xl:w-[250px] max-sm:w-[45%] h-auto "
            alt="faq-image-2"
          />
        </div>

        <div data-aos="fade-up">
          <div className="faq-right flex flex-col gap-[20px] max-xl:max-w-[100%] max-w-[550px] w-[100%] ">
            <div className="faq-title text-white sm:text-[40px] text-[25px] font-[600] leading-[45px] ">
              <TextTranslater txt="faq-title" />
            </div>

            <div
              onClick={() => {
                setFaq1(!faq1);
                setFaq2(false);
                setFaq3(false);
              }}
              className={` faq-questions  flex flex-col gap-[20px] border-[1px] border-gray-600 rounded-[20px] px-[15px]  transition-all duration-[0.2s] 
                ${faq1?'max-sm:h-[250px] ':''}`}
            >
              <div
                className={` question ${
                  faq1 ? "text-[#6c2dba]" : "text-white"
                } sm:text-[20px] text-[16px] pt-[25px] pb-[10px] flex justify-between items-center `}
              >
                <TextTranslater txt="faq-savol1" />
                <span
                  className={`sm:text-[30px] text-[25px] ${
                    faq1
                      ? "text-[#6c2dba] rotate-[90deg] duration-[0.4s] "
                      : "text-white"
                  }  `}
                >
                  <MdKeyboardDoubleArrowRight />
                </span>
              </div>
              <div
                className={` answer ${
                  faq1
                    ? "h-[85px] duration-[0.4s] -z-[3] "
                    : "h-[1px] opacity-[0] "
                } text-gray-400 sm:text-[16px] text-[14px] leading-[20px] `}
              >
                <TextTranslater
                  txt="faq-savol1-txt"
                  txt_styles={`${faq1 ? "" : "leading-[0px] "} text-left `}
                />
              </div>
            </div>

            <div
              onClick={() => {
                setFaq2(!faq2);
                setFaq1(false);
                setFaq3(false);
              }}
              className={` faq-questions  flex flex-col gap-[20px] border-[1px] border-gray-600 rounded-[20px] px-[15px]  transition-all duration-[0.2s]
                ${faq2?'max-sm:h-[260px] ':''} `}
            >
              <div
                className={` question ${
                  faq2 ? "text-[#6c2dba]" : "text-white"
                } sm:text-[20px] text-[16px] pt-[25px] pb-[10px] flex justify-between items-center `}
              >
                <TextTranslater txt="faq-savol2" />
                <span
                  className={`sm:text-[30px] text-[25px] ${
                    faq2
                      ? "text-[#6c2dba] rotate-[90deg] duration-[0.4s] "
                      : "text-white"
                  }  `}
                >
                  <MdKeyboardDoubleArrowRight />
                </span>
              </div>
              <div
                className={` answer ${
                  faq2
                    ? "h-[85px] duration-[0.4s] -z-[3] "
                    : "h-[1px] opacity-[0] "
                } text-gray-400 sm:text-[16px] text-[14px] leading-[20px] `}
              >
                <TextTranslater
                  txt="faq-savol2-txt"
                  txt_styles={`${faq2 ? "" : "leading-[0px] "} text-left `}
                />
              </div>
            </div>

            <div
              onClick={() => {
                setFaq3(!faq3);
                setFaq2(false);
                setFaq1(false);
              }}
              className={` faq-questions  flex flex-col gap-[20px] border-[1px] border-gray-600 rounded-[20px] px-[15px]  transition-all duration-[0.2s] 
                ${faq3?'max-sm:h-[260px] ':''}`}
            >
              <div
                className={` question ${
                  faq3 ? "text-[#6c2dba]" : "text-white"
                } sm:text-[20px] text-[16px] pt-[25px] pb-[10px] flex justify-between items-center `}
              >
                <TextTranslater txt="faq-savol3" />
                <span
                  className={`sm:text-[30px] text-[25px] ${
                    faq3
                      ? "text-[#6c2dba] rotate-[90deg] duration-[0.4s] "
                      : "text-white"
                  }  `}
                >
                  <MdKeyboardDoubleArrowRight />
                </span>
              </div>
              <div
                className={` answer ${
                  faq3
                    ? "h-[85px] duration-[0.4s] -z-[3] "
                    : "h-[1px] opacity-[0] "
                } text-gray-400 sm:text-[16px] text-[14px] leading-[20px] `}
              >
                <TextTranslater
                  txt="faq-savol3-txt"
                  txt_styles={`${faq3 ? "" : "leading-[0px] "} text-left `}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
