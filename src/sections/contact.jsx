import React from 'react'
import '../App.css';
import TextTranslater from '../components/textTranslater';
import { useTranslation } from 'react-i18next';
import axios from "axios";
import { Link } from 'react-router-dom';

export default function Contact() {

  const sendMessage = (event) => {
    event.preventDefault();
    
    const token = '7940057045:AAHRFPvgUCo_7pqpXD6uq4li7-_DYx2J96g'; // Use environment variable
    const chatId = 6134458285;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    // Get form data
    const name = event.target.elements.name.value; // Get input by name attribute
    const phoneNumber = event.target.elements.number.value;
    const info_user = `Ism: ${name}, Phone number: ${phoneNumber}`;

    axios.post(url, {
      chat_id: chatId,
      text: info_user
    })
    .then(() => {
      alert("Muvaffaqiyatli yuborildi!!!");
      event.target.reset(); 
    })
    .catch((error) => {
      console.error("Yuborishda xatolik:", error);
    });
  };

  const { t } = useTranslation();

  return (
    <div className='contact-part pt-[100px] pb-[20px] ' >
        <div className="container flex lg:flex-row flex-col lg:justify-between lg:items-start items-center lg:gap-[0px] gap-[50px] ">
 
            <div className="contact-left max-w-[550px] w-[100%] flex flex-col lg:items-start items-center  lg:max-w-[600px] max-w-full w-[100%] lg:text-left text-center ">
                <TextTranslater txt='buyurtma' txt_styles=' text-white lg:text-[40px] sm:text-[28px] text-[22px] font-[600] sm:leading-[44px] ' /> 
                <TextTranslater txt='buyurtma-txt' txt_styles=' text-[#6c2dba] lg:my-[40px] my-[25px] lg:text-[18px] text-[16px] ' />
                <TextTranslater txt='sahifa' txt_styles=' text-white font-[700] lg:text-[20px] text-[17px] lg:mb-[20px] mb-[10px] ' />
                <Link to={'/'} >
                <TextTranslater txt='bosh_sahifa' txt_styles=' text-gray-500 lg:text-[17px] text-[15px] ' />
                </Link>
                <Link to={'/xizmat'} >
                <TextTranslater txt='xizmat' txt_styles=' text-gray-500 lg:text-[17px] text-[15px] ' />
                </Link>
            </div>

            <div className="contact-right max-w-[580px] w-[100%] ">
              <TextTranslater txt='form-title' txt_styles=' text-white sm:text-[30px] text-[20px] mb-[30px] font-[700] ' />
              <form className="flex flex-col gap-[20px]" onSubmit={sendMessage}>
                <input
                  type="text"
                  name="name" // Changed from id to name
                  placeholder={t("ism")}
                  className=" rounded-[50px] bg-[#363636] px-[25px] py-[15px] text-[15px] text-gray-200 "
                  required
                />
                <input
                  type="text"
                  name="number" // Changed from id to name
                  placeholder="+998-94-033-72-12"
                  className="rounded-[50px] bg-[#363636] px-[25px] py-[15px] text-[15px] text-gray-200"
                  required
                />
                <textarea name="message" id="" placeholder={t("xabar")} className='rounded-[20px] h-[150px] bg-[#363636] px-[25px] py-[15px] text-[15px] text-gray-200' style={{resize:'none'}} ></textarea>
                <input
                  type="submit"
                  value={t("yuborish-btn")}
                  className="w-[170px] bg-[#6c2dba] text-white text-[15px] rounded-[50px] py-[12px]"
                />
              </form>
            </div>

        </div>
    </div>
  )
}
