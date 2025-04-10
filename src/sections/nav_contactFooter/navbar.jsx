import React, { useCallback, useEffect, useState } from "react";
import "../../App.css";
import TextTranslater from "../../components/textTranslater";
import { Link } from "react-router-dom";

// logo image
import logo from "../../assets/limsa_logo.png";
import Btn from "../../components/btn";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [scrollY_Screen, setScrollY_Screen] = useState(true);

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

  return (
    <div
      className={`navbar ${
        scrollY_Screen ? "bg-[#161616]" : "backdrop-blur-sm"
      }  border-b-2 border-gray-400`}
    >
      <div className="container text-white flex justify-around items-center  ">
        <div className="logo  ">
          <img
            src={logo}
            loading="lazy"
            alt="logo image"
            className=" w-[120px] "
          />
        </div>

        <div className="links max-w-[800px] w-[100%] flex justify-start items-center gap-[20px] ">
          <LinksGroup />
        </div>

        <div className="phoneNumber-btn py-[10px] px-[20px] ">
          <Btn
            txt="+998 (33) 258 73 58"
            btn_styles=" px-[25px] py-[8px] text-[14px] rounded-[25px] "
            id_name="navbar-btn"
          />
        </div>
      </div>
    </div>
  );
}


function LinksGroup() {

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
  const {i18n} = useTranslation();
  const handleChange = () =>{}

  return (
    <>
      <Link
        to="/"
        onClick={() => handleLinkClick("home")}
        className={`text-[16px] py-[4px] px-[10px] ${
          activeLink.home
            ? "rounded-[25px] border-b-[2px] border-[#6c2dba]"
            : ""
        }`}
      >
        <TextTranslater txt="bosh_sahifa" />
      </Link>

      <Link
        to="/xizmat"
        onClick={() => handleLinkClick("service")}
        className={`text-[16px] py-[4px] px-[10px] ${
          activeLink.service
            ? "rounded-[25px] border-b-[2px] border-[#6c2dba]"
            : ""
        }`}
      >
        <TextTranslater txt="xizmat" />
      </Link>

      <Link
        to="/ishlar"
        onClick={() => handleLinkClick("works")}
        className={`text-[16px] py-[4px] px-[10px] ${
          activeLink.works
            ? "rounded-[25px] border-b-[2px] border-[#6c2dba]"
            : ""
        }`}
      >
        <TextTranslater txt="bizning-ishlar" />
      </Link>

      <Link
        to="/narxlar"
        onClick={() => handleLinkClick("prices")}
        className={`text-[16px] py-[4px] px-[10px]  ${
          activeLink.prices
            ? "rounded-[25px] border-b-[2px] border-[#6c2dba]"
            : ""
        }`}
      >
        <TextTranslater txt="narxlar" />
      </Link>
      <select className="appearance-none hover:bg-gray-700 shadow-white p-[8px] rounded-[10px] flex flex-col justify-center items-center " onChange={handleChange} >
        <option value={"uz"} >Уз</option>
        <option value={"ru"} >Py</option>
        <option value={"en"} >Eng</option>
      </select>
    </>
  );
}
