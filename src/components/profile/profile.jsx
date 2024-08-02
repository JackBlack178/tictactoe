import React from "react";
import Image from "next/image";
import profileImageSrc from "../header/figures/profile.png";
import { clsx } from "clsx";

const Profile = ({ className }) => {
  return (
    <div
      className={clsx(
        className,
        "ml-auto flex item-center gap-2 text-start text-teal-500",
      )}
    >
      <Image src={profileImageSrc} alt="Profile"></Image>
      <div>
        <div className="text-lg leading-tight ">Name1</div>
        <div className="text-slate-400 text-xs leading-tight">Rating:1234</div>
      </div>
    </div>
  );
};

export default Profile;
