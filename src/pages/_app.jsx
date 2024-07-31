import React from "react";
import "../styles/global.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

const _App = ({ Component, pageProps }) => {
  return (
    <div className={inter.className}>
      <Component {...pageProps} />;
    </div>
  );
};

export default _App;
