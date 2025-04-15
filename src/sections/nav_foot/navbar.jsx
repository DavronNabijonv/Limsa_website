import React, { useCallback, useEffect, useState } from "react";
import "../../App.css";
import TextTranslater from "../../components/textTranslater";
import { Link } from "react-router-dom";

// logo image
import logo from "../../assets/limsa_logo.png";
import Btn from "../../components/btn";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [scrollY_Screen, setScrollY_Screen] = useState(false);
  // hide and show of togle button
  const [togle, setTogle] = useState(false);

  // useCallback must be here, not inside useEffect
  const scrollYScreen = useCallback(() => {
    window.scrollY !== 0 ? setScrollY_Screen(false) : setScrollY_Screen(true);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollYScreen);

    return () => {
      window.removeEventListener("scroll", scrollYScreen);
    };
  }, [scrollYScreen]);

  // change togle navbar for phone type
  const changeTogler = () => {
    setTogle(!togle);
  };

  return (
    <div
      className={`navbar fixed z-[1000] w-[100%] top-0 ${
        scrollY_Screen ? "backdrop-blur-sm" : "bg-[#161616]"
      }  border-b-1 border-gray-400`}
    >
      <div className="container text-white flex lg:justify-around justify-between items-center gap-[10px]  ">
        <div className="logo  ">
          <img
            src={logo}
            loading="lazy"
            alt="logo image"
            className=" lg:w-[200px] w-[180px] "
          />
        </div>

        <div className=" links max-w-[800px] w-[100%] lg:flex hidden justify-start items-center gap-[20px] ">
          <LinksGroup />
        </div>

        <div className=" lg:inline hidden phoneNumber-btn py-[10px] px-[20px] ">
          <Btn
            txt="+998 (33) 258 73 58"
            btn_styles=" py-[8px] text-[14px] rounded-[25px] w-[180px] "
            id_name="navbar-btn"
          />
        </div>

        {/* style navbar for phone */}
        <div className={`lg:hidden flex flex-col gap-[15px] absolute duration-[0.4s] ${togle?"transform translate-x-[0%] z-[22222] ":"transform translate-x-[100%]"} top-[66px] bg-[#161616] right-0 w-[60%] p-[15px] `}>
          <LinksGroup close_func={()=>{setTogle(false)}} />
        </div>

        <div
          className={"lg:hidden inline right-0 w-[2rem]  "}
          onClick={changeTogler}
        >
          <div
            className={` ${
              togle
                ? " transform -rotate-[45deg] -translate-x-[10px] translate-y-[5px] "
                : "  "
            } m-[0.5rem] w-[1.5rem] h-[0.12rem] bg-[#6c2dba] duration-[0.4s]`}
          ></div>
          <div
            className={` ${
              togle ? "opacity-[0]" : "opacity-[1]"
            } m-[0.5rem] w-[0.8rem] h-[0.12rem] bg-[#6c2dba] duration-[0.4s]`}
          ></div>
          <div
            className={` ${
              togle
                ? "transform rotate-[45deg] -translate-x-[10px] -translate-y-[15px]"
                : ""
            } m-[0.5rem] w-[1.5rem] h-[0.12rem] bg-[#6c2dba] duration-[0.4s]`}
          ></div>
        </div>

      </div>

      {/* overflow */}
      <div
        className={`absolute ${
          togle ? "flex" : "hidden"
        } w-[100%] h-[100%] top-0 bottom-0 left-0 `}
        onClick={() => setTogle(false)}
      ></div>
      {/* overflow */}

    </div>
  );
}

function LinksGroup({ close_func }) {
  // active links
  const [activeLink, setActiveLink] = useState({
    home: true,
    service: false,
    works: false,
    prices: false,
  });

  // take active links
  const handleLinkClick = (linkName) => {
    setActiveLink({
      home: false,
      service: false,
      works: false,
      prices: false,
      [linkName]: true,
    });
  };

  // change language
  const { i18n } = useTranslation();
  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <>
      <Link
        to="/"
        onClick={() => {
          close_func();
          handleLinkClick("home");
        }}
        className={`text-[16px] py-[4px] px-[10px]  ${
          activeLink.home
            ? "rounded-[25px] border-b-[2px] max-w-[120px] border-[#6c2dba]"
            : ""
        }`}
      >
        <TextTranslater txt="bosh_sahifa" />
      </Link>

      <Link
        to="/xizmat"
        onClick={() => {
          handleLinkClick("service");
          close_func();
        }}
        className={`text-[16px] py-[4px] px-[10px] ${
          activeLink.service
            ? "rounded-[25px] max-w-[140px] border-b-[2px] border-[#6c2dba]"
            : ""
        }`}
      >
        <TextTranslater txt="xizmat" />
      </Link>

      <Link
        to="/ishlar"
        onClick={() => {
          handleLinkClick("works");
          close_func();
        }}
        className={`text-[16px] py-[4px] px-[10px] ${
          activeLink.works
            ? "rounded-[25px] max-w-[140px] border-b-[2px] border-[#6c2dba]"
            : ""
        }`}
      >
        <TextTranslater txt="bizning-ishlar" />
      </Link>

      <Link
        to="/narxlar"
        onClick={() => {
          handleLinkClick("prices");
          close_func();
        }}
        className={`text-[16px] py-[4px] px-[10px]  ${
          activeLink.prices
            ? "rounded-[25px] max-w-[85px] border-b-[2px] border-[#6c2dba]"
            : ""
        }`}
      >
        <TextTranslater txt="narxlar" />
      </Link>
      <select
        className="appearance-none hover:bg-gray-700 shadow-white p-[8px] rounded-[10px] flex flex-col justify-center items-center "
        onChange={handleChange}
      >
        <option value={"uz"}>Уз</option>
        <option value={"ru"}>Py</option>
        <option value={"en"}>Eng</option>
      </select>
    </>
  );
}
