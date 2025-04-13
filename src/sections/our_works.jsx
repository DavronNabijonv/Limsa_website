import React from "react";
import "../App.css";

// images
import ataev from "../assets/work_ataev.jpg";
import avto from "../assets/work_avtozoom.jpg";
import homekit from "../assets/work_homekit.jpg";
import ittime from "../assets/work_itTime.png";
import loyal from "../assets/work_loyal.jpg";
import noit from "../assets/work_noits.jpg";
import partnyor from "../assets/work_propartnyor.jpg";
import zamon from "../assets/work_zamonTour.jpg";
import TextTranslater from "../components/textTranslater";

export default function Our_works() {
  return (
    <div data-aos="fade-up">
      <div className="our-works my-[100px] ">
        <TextTranslater
          txt="loyiha-title"
          txt_styles=" text-white md:text-[40px] text-[30px] max-w-[700px] w-[100%] mx-auto my-[30px]  text-center font-[600] "
        />
        <div className="container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] ">
          <a
            href="https://www.ataevbahodirbuild.uz/"
            target="_blank"
            className="work-card-links  "
          >
            <div className=" work-card border-b-[1px] border-gray-400 pb-[20px] flex flex-col gap-[20px] ">
              <p className="card-title text-white text-[18px] font-[600] ">
                ataevbahodirbuild.uz
              </p>
              <img
                src={ataev}
                loading="lazy"
                className=" hover:scale-[1.1] duration-[0.4s] "
                alt="ataevbahodirbuild image"
              />
              <TextTranslater
                txt="loyiha-ataev"
                txt_styles=" text-white text-[17px] leading-[22px] w-[90%] sm:h-[90px] h-[100px]  "
              />
            </div>
          </a>

          <a
            href="https://www.autozoomrental.com/"
            target="_blank"
            className="work-card-links  "
          >
            <div className=" work-card border-b-[1px] border-gray-400 pb-[20px] flex flex-col gap-[20px] ">
              <p className="card-title text-white text-[18px] font-[600] ">
                autozoomrental.com
              </p>
              <img
                src={avto}
                loading="lazy"
                className=" hover:scale-[1.1] duration-[0.4s] "
                alt="ataevbahodirbuild image"
              />
              <TextTranslater
                txt="loyiha-auto"
                txt_styles=" text-white text-[17px] leading-[22px] w-[90%] sm:h-[90px] h-[100px]  "
              />
            </div>
          </a>

          <a
            href="https://www.it-time-academy.uz/"
            target="_blank"
            className="work-card-links  "
          >
            <div className=" work-card border-b-[1px] border-gray-400 pb-[20px] flex flex-col gap-[20px] ">
              <p className="card-title text-white text-[18px] font-[600] ">
                it-time-academy.uz
              </p>
              <img
                src={ittime}
                loading="lazy"
                className=" hover:scale-[1.1] duration-[0.4s] "
                alt="ataevbahodirbuild image"
              />
              <TextTranslater
                txt="loyiha-ittime"
                txt_styles=" text-white text-[17px] leading-[22px] w-[95%] sm:h-[77px] h-[90px] "
              />
            </div>
          </a>

          <a
            href="https://www.homekit.uz/"
            target="_blank"
            className="work-card-links  "
          >
            <div className=" work-card border-b-[1px] border-gray-400 pb-[20px] flex flex-col gap-[20px] ">
              <p className="card-title text-white text-[18px] font-[600] ">
                homekit.uz
              </p>
              <img
                src={homekit}
                loading="lazy"
                className=" hover:scale-[1.1] duration-[0.4s] "
                alt="ataevbahodirbuild image"
              />
              <TextTranslater
                txt="loyiha-home"
                txt_styles=" text-white text-[17px] leading-[22px] w-[90%] sm:h-[90px] h-[100px] "
              />
            </div>
          </a>

          <a
            href="https://www.uzloyal.uz/"
            target="_blank"
            className="work-card-links  "
          >
            <div className=" work-card border-b-[1px] border-gray-400 pb-[20px] flex flex-col gap-[20px] ">
              <p className="card-title text-white text-[18px] font-[600] ">
                uzloyal.uz
              </p>
              <img
                src={loyal}
                loading="lazy"
                className=" hover:scale-[1.1] duration-[0.4s] "
                alt="ataevbahodirbuild image"
              />
              <TextTranslater
                txt="loyiha-loyal"
                txt_styles=" text-white text-[17px] leading-[22px] w-[90%] sm:h-[90px] h-[100px] "
              />
            </div>
          </a>

          <a
            href="https://www.namanganoits.uz/"
            target="_blank"
            className="work-card-links  "
          >
            <div className=" work-card border-b-[1px] border-gray-400 pb-[20px] flex flex-col gap-[20px] ">
              <p className="card-title text-white text-[18px] font-[600] ">
                namanganoits.uz
              </p>
              <img
                src={noit}
                loading="lazy"
                className=" hover:scale-[1.1] duration-[0.4s] "
                alt="ataevbahodirbuild image"
              />
              <TextTranslater
                txt="loyiha-noits"
                txt_styles=" text-white text-[17px] leading-[22px] w-[90%] sm:h-[90px] h-[100px] "
              />
            </div>
          </a>

          <a
            href="https://propartnyor.uz/"
            target="_blank"
            className="work-card-links  "
          >
            <div className=" work-card border-b-[1px] border-gray-400 pb-[20px] flex flex-col gap-[20px] ">
              <p className="card-title text-white text-[18px] font-[600] ">
                propartnyor.uz
              </p>
              <img
                src={partnyor}
                loading="lazy"
                className=" hover:scale-[1.1] duration-[0.4s] "
                alt="ataevbahodirbuild image"
              />
              <TextTranslater
                txt="loyiha-pro"
                txt_styles=" text-white text-[17px] leading-[22px] w-[95%] sm:h-[90px] h-[100px] "
              />
            </div>
          </a>

          <a
            href="https://zamontour.uz/"
            target="_blank"
            className="work-card-links  "
          >
            <div className=" work-card border-b-[1px] border-gray-400 pb-[20px] flex flex-col gap-[20px] ">
              <p className="card-title text-white text-[18px] font-[600] ">
                zamontour.uz
              </p>
              <img
                src={zamon}
                loading="lazy"
                className=" hover:scale-[1.1] duration-[0.4s] "
                alt="ataevbahodirbuild image"
              />
              <TextTranslater
                txt="loyiha-tour"
                txt_styles=" text-white text-[17px] leading-[22px] w-[95%] sm:h-[90px] h-[100px] "
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
