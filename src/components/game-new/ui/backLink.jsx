import React from "react";
import ArrowLeftIcon from "../../game/icons/arrowLeftIcon";
import Link from "next/link";

const BackLink = () => {
  return (
    <Link href="#" className="flex items-center gap-2 text-xs text-teal-600">
      <ArrowLeftIcon></ArrowLeftIcon>
      На главную
    </Link>
  );
};

export default BackLink;
