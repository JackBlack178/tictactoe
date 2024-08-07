import React from "react";

import Image from "next/image";
import logoXSrc from "./figures/X.svg";
import logoOSrc from "./figures/o.svg";

import UIButton from "../UI/UIButton";
import { Profile } from "../profile";
import ArrowDown from "../profile/icons/arrowDown";

const Header = () => {
  return (
    <header
      className={
        "w-full flex flex-wrap h-20 px-2 sm:px-8 items-center bg-white shadow-md"
      }
    >
      <Image src={logoXSrc} alt="Logo X" className="h-6 xl:h-8 md:h-6" />
      <div className="h-6 xl:h-8 md:h-6  w-px border border-black mx-2 md:mx-6"></div>
      <Image src={logoOSrc} alt="Logo O" className="h-6 xl:h-8 md:h-6" />

      <UIButton option="primary" size="md" className="ml-10  md:ml-28">
        Играть
      </UIButton>

      <button className="ml-auto flex items-center text-teal-600 h-8 xl:h-10 md:h-9 gap-0.5">
        <Profile className="hover:text-teal-800 transition-all duration-300"></Profile>
        <ArrowDown className="hover:text-teal-800 transition-all duration-300"></ArrowDown>
      </button>
    </header>
  );
};

export default Header;
