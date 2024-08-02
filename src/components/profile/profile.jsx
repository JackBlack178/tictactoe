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
      <Image src={avatarSrc} alt="Profile"></Image>
      <div className="overflow-hidden">
        <div className="text-lg leading-tight truncate ">{name}</div>
        <div className="text-slate-400 text-xs leading-tight">
          Rating:{rating}
        </div>
      </div>
    </div>
  );
};

export default Profile;
