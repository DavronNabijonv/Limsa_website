import React from "react";
import TextTranslater from "./textTranslater";

export default function Btn({
  btn_func,
  tog_hover = false,
  btn_radius_value = "rounded-[15px]",
  id_name,
}) {
  return (
    <button
      id={id_name}
      onClick={btn_func}
      className={`${btn_radius_value} text-white border-[1px] border-[#6c2dba] bg-[#6c2dba] ${
        tog_hover ? "hover:bg-transparent" : ""
      }   `}
    >
      <TextTranslater txt={txt} />
    </button>
  );
}
