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
  const titulo = `Libo Weather - ${props.title}`;

  return (
    <div className={inter.className}>
      <Head>
        <meta
          name="description"
          content="Web Page created by Valentin Libonati. - Email: valentinlibonati33@gmail.com. - Linkedin: https://www.linkedin.com/in/valentin-libonati-b608521b7/"
        />
        <meta charSet="UTF-8" />
        <title>{titulo}</title>
      </Head>
      {props.children}
    </div>
  );
};

export default Layout;
