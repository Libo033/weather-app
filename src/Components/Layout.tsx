import Head from "next/head";
import React from "react";
import { Roboto_Flex } from "next/font/google";

const inter = Roboto_Flex({
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "1000",
  ],
  subsets: ["latin"],
});

interface ILayoutProps {
  children: React.ReactNode;
  title: string;
}

const Layout: React.FC<ILayoutProps> = (props) => {
  const titulo = `Libo Weather - ${props.title}`

  return (
    <div className={inter.className}>
      <Head>
        <title>{titulo}</title>
      </Head>
      {props.children}
    </div>
  );
};

export default Layout;
