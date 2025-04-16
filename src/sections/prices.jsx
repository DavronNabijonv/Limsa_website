import React, { useEffect } from "react";
import "../App.css";
import TextTranslater from "../components/textTranslater";

// icons
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Btn from "../components/btn";

export default function Prices() {
  useEffect(()=>{ window.scrollTo(0, 0);},[])
  return (
    <div className="prices xl:mt-[180px] mt-[100px] ">
      <TextTranslater
        txt="narxlar-page-title-btn"
        txt_styles={` mx-auto rounded-[25px] text-center w-[200px] text-white text-[18px] border-[1px] border-[#6c2dba] px-[20px] py-[10px] `}
      />

      <div className="price-bg">
        <TextTranslater
          txt="narxlar-page-title"
          txt_styles=" text-center w-full text-white my-[50px] sm:text-[40px] text-[23px] font-[600] max-sm:px-[5px] "
        />

        <div className="container flex flex-col gap-[5px] ">

          <div className="price-grp flex lg:flex-row flex-col ">

            <div className="grp-left p-[30px] lg:w-[400px] w-full ">
              <TextTranslater
                txt="boshlangich-title"
                txt_styles={" text-[#6c2dba] text-[25px] font-[600] mb-[20px] "}
              />
              <TextTranslater
                txt="boshlangich-txt"
                txt_styles=" text-gray-400 "
              />
            </div>

            <div className="grp-right max-w-[950px] w-full xl:pl-[200px] pl-[30px] xl:pr-[10px] px-[20px] lg:pb-[0px] pb-[10px] flex lg:flex-row flex-col justify-between lg:items-center items-start ">

              <div className="features flex flex-col gap-[5px] text-gray-400 ">
                <div className="f-items flex items-center gap-[5px] text-[13px] ">
                  <span className="text-[#6D2dbc] font-[600] text-[16px] ">
                    <FaCheck />
                  </span>
                  <TextTranslater txt="domen" />
                </div>
                <div className="f-items flex items-center gap-[5px] text-[13px] ">
                  <span className="text-[#6D2dbc] font-[600] text-[16px] ">
                    <FaCheck />
                  </span>
                  <TextTranslater txt="ximoya" />
                </div>
                <div className="f-items flex items-center gap-[5px] text-[13px] ">
                  <span className="text-[#6D2dbc] font-[600] text-[16px] ">
                    <FaCheck />
                  </span>
                  <TextTranslater txt="muddat-3kun" />
                </div>
                <div className="f-items flex items-center gap-[5px] text-[13px] ">
                  <span className="text-[#6D2dbc] font-[600] text-[16px] ">
                    <FaCheck />
                  </span>
                  <TextTranslater txt="sahifa-soni1" />
                </div>
              </div>

              <div className="btn-grp flex lg:flex-row flex-col gap-[18px] ">
                <TextTranslater txt="kelishish" txt_styles=' text-[#6d2dbc] text-[20px] font-[600] ' />
                <Link>
                  <Btn txt="buyurtma-berish-btn" btn_styles=' w-[200px] rounded-[5px] text-[17px] py-[4px] font-[600] ' />
                </Link>
              </div>
            </div>


          </div>

          <div className="price-grp flex lg:flex-row flex-col ">

            <div className="grp-left p-[30px] lg:w-[400px] w-full ">
              <TextTranslater
                txt="boshlangich-title"
                txt_styles={" text-[#6c2dba] text-[25px] font-[600] mb-[20px] "}
              />
              <TextTranslater
                txt="boshlangich-txt"
                txt_styles=" text-gray-400 "
              />
            </div>

            <div className="grp-right max-w-[950px] w-full xl:pl-[200px] pl-[30px] xl:pr-[10px] px-[20px] lg:pb-[0px] pb-[10px] flex lg:flex-row flex-col justify-between lg:items-center items-start ">

              <div className="features flex flex-col gap-[5px] text-gray-400 ">
                <div className="f-items flex items-center gap-[5px] text-[13px] ">
                  <span className="text-[#6D2dbc] font-[600] text-[16px] ">
                    <FaCheck />
                  </span>
                  <TextTranslater txt="domen" />
                </div>
                <div className="f-items flex items-center gap-[5px] text-[13px] ">
                  <span className="text-[#6D2dbc] font-[600] text-[16px] ">
                    <FaCheck />
                  </span>
                  <TextTranslater txt="ximoya" />
                </div>
                <div className="f-items flex items-center gap-[5px] text-[13px] ">
                  <span className="text-[#6D2dbc] font-[600] text-[16px] ">
                    <FaCheck />
                  </span>
                  <TextTranslater txt="muddat-3kun" />
                </div>
                <div className="f-items flex items-center gap-[5px] text-[13px] ">
                  <span className="text-[#6D2dbc] font-[600] text-[16px] ">
                    <FaCheck />
                  </span>
                  <TextTranslater txt="sahifa-soni1" />
                </div>
              </div>

              <div className="btn-grp flex lg:flex-row flex-col gap-[18px] ">
                <TextTranslater txt="kelishish" txt_styles=' text-[#6d2dbc] text-[20px] font-[600] ' />
                <Link>
                  <Btn txt="buyurtma-berish-btn" btn_styles=' w-[200px] rounded-[5px] text-[17px] py-[4px] font-[600] ' />
                </Link>
              </div>
            </div>


          </div>

          <div className="price-grp flex lg:flex-row flex-col ">

            <div className="grp-left p-[30px] lg:w-[400px] w-full ">
              <TextTranslater
                txt="boshlangich-title"
                txt_styles={" text-[#6c2dba] text-[25px] font-[600] mb-[20px] "}
              />
              <TextTranslater
                txt="boshlangich-txt"
                txt_styles=" text-gray-400 "
              />
            </div>

            <div className="grp-right max-w-[950px] w-full xl:pl-[200px] pl-[30px] xl:pr-[10px] px-[20px] lg:pb-[0px] pb-[10px] flex lg:flex-row flex-col justify-between lg:items-center items-start ">

              <div className="features flex flex-col gap-[5px] text-gray-400 ">
                <div className="f-items flex items-center gap-[5px] text-[13px] ">
                  <span className="text-[#6D2dbc] font-[600] text-[16px] ">
                    <FaCheck />
                  </span>
                  <TextTranslater txt="domen" />
                </div>
                <div className="f-items flex items-center gap-[5px] text-[13px] ">
                  <span className="text-[#6D2dbc] font-[600] text-[16px] ">
                    <FaCheck />
                  </span>
                  <TextTranslater txt="ximoya" />
                </div>
                <div className="f-items flex items-center gap-[5px] text-[13px] ">
                  <span className="text-[#6D2dbc] font-[600] text-[16px] ">
                    <FaCheck />
                  </span>
                  <TextTranslater txt="muddat-3kun" />
                </div>
                <div className="f-items flex items-center gap-[5px] text-[13px] ">
                  <span className="text-[#6D2dbc] font-[600] text-[16px] ">
                    <FaCheck />
                  </span>
                  <TextTranslater txt="sahifa-soni1" />
                </div>
              </div>

              <div className="btn-grp flex lg:flex-row flex-col gap-[18px] ">
                <TextTranslater txt="kelishish" txt_styles=' text-[#6d2dbc] text-[20px] font-[600] ' />
                <Link>
                  <Btn txt="buyurtma-berish-btn" btn_styles=' w-[200px] rounded-[5px] text-[17px] py-[4px] font-[600] ' />
                </Link>
              </div>
            </div>


          </div>

        </div>
      </div>
    </div>
  );
}
