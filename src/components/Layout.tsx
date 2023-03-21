import React from "react";
import { Raleway } from "next/font/google";

import styles from "../styles/components/LayoutStyle.module.scss";
import { Sidebar } from "./Sidebar";

type Props = {
  children: string | JSX.Element | JSX.Element[] | React.ReactNode;
};
const raleway = Raleway({ subsets: ["latin"] });

export const Layout = ({ children }: Props) => {
  return (
    <div className={`${raleway.className} ${styles.layout}`}>
      <Sidebar />
      {children}
    </div>
  );
};
