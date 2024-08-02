import React from "react";

import Image from "next/image";
import logoXSrc from "./figures/X.svg";
import logoOSrc from "./figures/o.svg";

import UIButton from "../../UI/Button/UIButton";
import { Profile } from "../profile";
import ArrowDown from "../profile/icons/arrowDown";

const Header = () => {
  return (
    <header className={"flex h-24 items-center px-8 bg-white shadow-md"}>
      <Image src={logoXSrc} alt="Logo X" />
      <div className="h-8 w-px border border-black mx-6"></div>
      <Image src={logoOSrc} alt="Logo O" />

      <UIButton option="primary" size="lg" className="ml-28">
        Играть
      </UIButton>

      <button className="ml-auto flex items-center text-teal-600">
        <Profile className="hover:text-teal-800 transition-all duration-300"></Profile>
        <ArrowDown className="hover:text-teal-800 transition-all duration-300"></ArrowDown>
      </button>
    </header>
  );
};

export default Header;
