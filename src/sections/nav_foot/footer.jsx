import React, { useCallback } from "react";
import TextTranslater from "../../components/textTranslater";

// icons and images
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall, FiInstagram } from "react-icons/fi";
import { PiClockFill, PiShareNetworkBold } from "react-icons/pi";
import { FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import footLogo from "../../assets/footer_logo.png";

export default function Footer() {
    const toTop = useCallback(()=>{ window.scrollTo(0, 0);},[])
  return (
    <div className="footer-part pt-[100px] ">
      <div className="container flex lg:flex-row flex-col lg:gap-[0px] gap-[50px] justify-between lg:items-start items-center ">
        <div className="left-part max-w-[650px] w-[100%]">
          <TextTranslater
            txt="kontakt"
            txt_styles=" text-white text-[30px] font-[600] mb-[30px] "
          />

          <div className="grp w-full  flex justify-between sm:flex-nowrap flex-wrap sm:gap-[0px] gap-[30px] ">
            <div className="flex items-center gap-[20px] ">
              <span className=" text-gray-300 text-[25px] ">
                <CiLocationOn />
              </span>
              <div className="flex flex-col gap-[5px] ">
                <TextTranslater
                  txt="manzil"
                  txt_styles=" text-white text-[17px] font-[600] "
                />
                <TextTranslater
                  txt="manzil-txt"
                  txt_styles=" text-zinc-500 text-[15px] "
                />
              </div>
            </div>

            <div className="flex items-center gap-[20px] pr-[40px] ">
              <span className=" text-gray-300 text-[25px] ">
                <FiPhoneCall />
              </span>
              <div className="flex flex-col gap-[5px] ">
                <TextTranslater
                  txt="tel-raqam"
                  txt_styles=" text-white text-[17px] font-[600] "
                />
                <p className="text-zinc-500 text-[15px]">+998 (33) 258 73 58</p>
              </div>
            </div>
          </div>

          <div className="grp w-full  flex justify-between mt-[50px] sm:flex-nowrap flex-wrap sm:gap-[0px] gap-[30px] ">
            <div className="flex items-center gap-[20px] ">
              <span className=" text-gray-300 text-[25px] ">
                <PiClockFill />
              </span>
              <div className="flex flex-col gap-[5px] ">
                <TextTranslater
                  txt="ish-vaqti"
                  txt_styles=" text-white text-[17px] font-[600] "
                />
                <TextTranslater
                  txt="ish-vaqti-txt"
                  txt_styles=" text-zinc-500 text-[15px] "
                />
              </div>
            </div>

            <div className="flex items-center gap-[20px] ">
              <span className=" text-gray-300 text-[25px] ">
                <PiShareNetworkBold />
              </span>
              <div className="flex flex-col gap-[5px] ">
                <TextTranslater
                  txt="tarmoqlar"
                  txt_styles=" text-white text-[17px] font-[600] "
                />
                <div className="netwrok-links text-zinc-500 text-[15px] flex gap-[10px] ">
                  <a
                    href="https://www.linkedin.com/company/limsa-2021/"
                    className="text-zinc-500 text-[25px] "
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://www.instagram.com/limsa_uz"
                    className="text-zinc-500 text-[25px] "
                  >
                    <FiInstagram />
                  </a>
                  <a
                    href="https://t.me/the_rustambek"
                    className="text-zinc-500 text-[25px] "
                  >
                    <FaTelegramPlane />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="iframe-location max-w-[650px] w-[100%] mb-[40px] h-[350px] rounded-[25px] ">
          <iframe
            className=" w-full h-full rounded-[25px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.65547130854!2d69.28311021090116!3d41.33810459893217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b5f1f5cfd49%3A0x110bc2a5ed9856b7!2sLIMSA!5e0!3m2!1sru!2s!4v1730879135357!5m2!1sru!2s"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Map"
          ></iframe>
        </div>
      </div>

      <div className="last-footer bg-[#0c0a0a] w-full py-[10px] ">
        <div className="container mt-[50px] flex sm:gap-[0px] gap-[15px] justify-between items-center ">
          <button onClick={toTop} >
            <img
              src={footLogo}
              className=" w-[180px] "
              loading="lazy"
              alt="footer logo image"
            />
          </button>
          <TextTranslater txt="huquq" txt_styles=" text-white max-sm:text-[14px] max-sm:leading-[20px] " />
        </div>
      </div>
    </div>
  );
}
