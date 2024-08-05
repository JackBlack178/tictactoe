import React from "react";

import Link from "next/link";
import ArrowLeftIcon from "./icons/arrowLeftIcon";

const BackLink = () => {
  return (
    <Link href="#" className="flex items-center gap-2 text-xs text-teal-600">
      <ArrowLeftIcon></ArrowLeftIcon>
      На главную
    </Link>
  );
};

export default BackLink;
