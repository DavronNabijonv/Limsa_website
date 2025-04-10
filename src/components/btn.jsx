import React from "react";
import TextTranslater from "./textTranslater";
import '../App.css';

export default function Btn({
  btn_func,
  btn_styles = "rounded-[15px]",
  id_name,
  txt,
}) {
  return (
    <button
      id={id_name}
      onClick={btn_func}
      className={`${btn_styles} text-white border-[1px] border-[#6c2dba] bg-[#6c2dba] `}
    >
      <TextTranslater txt={txt} />
    </button>
  );
}
