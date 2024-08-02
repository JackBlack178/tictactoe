import React from "react";
import "../styles/global.scss";
import { Inter } from "next/font/google";
import { clsx } from "clsx";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

const _App = ({ Component, pageProps }) => {
  return (
    <div className={clsx(inter.className, "text-slate-900")}>
      <Component {...pageProps} />
    </div>
  );
};

export default _App;
