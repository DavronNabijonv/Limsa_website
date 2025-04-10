import React, { useCallback, useEffect, useState } from 'react';
import '../../App.css';
import TextTranslater from '../../components/textTranslater';

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
    <div className={`navbar ${scrollY_Screen ? 'bg-[#161616]' : 'backdrop-blur-sm'} border-b-2 border-gray-400`}>
      <div className="container text-white-[900]">
        <TextTranslater txt="bosh_sahifa" />
      </div>
    </div>
  );
}
