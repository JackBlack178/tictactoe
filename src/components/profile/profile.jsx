import React from "react";
import Image from "next/image";
import profileImageSrc from "../header/figures/profile.png";
import { clsx } from "clsx";

const Profile = ({
  className,
  name = "Name",
  rating = 1000,
  avatarSrc = profileImageSrc,
}) => {
  return (
    <div
      className={clsx(
        className,
        "ml-auto flex item-center gap-2 text-start text-teal-500",
      )}
    >
      <Image
        src={avatarSrc}
        alt="Profile"
        className={"w-8 aspect-square md:w-12 transition-all duration-1000"}
      ></Image>

      <div className="overflow-hidden">
        <div className="text-sm md:text-lg leading-tight truncate">{name}</div>
        <div className="text-slate-400 text-xs  md:text-xs leading-tight">
          Rating:{rating}
        </div>
      </div>
    </div>
  );
};

export default Profile;
