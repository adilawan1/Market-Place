import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import { Josefin_Sans } from "next/font/google";

const josef = Josefin_Sans({ subsets: ["latin"] });
type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is a title" }: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <div
            className={`flex bg-violet text-white text-center ${josef.className} border-black drop-shadow-md`}
          >
            <div className="container mx-auto px-4 color grid grid-cols-3 ">
              <div className="flex flex-row gap-4 justify-start">
                <div>1ahmed2adil3awan@gmail.com</div>
                <div>0336-6205950</div>
              </div>
              <div></div>
              <div className="flex flex-row  gap-4 justify-end">
                <div>English</div>
                <div>USD</div>
                <div>Wish List</div>
                <div>Log In</div>
              </div>
            </div>
          </div>
          <div className={`flex bg-white text-black ${josef.className} pt-2.5`}>
            <div className="container mx-auto px-4 grid grid-cols-3 relative">
              <div className="flex flex-row gap-4 justify-start items-baseline">
                <div className="text-3xl font-bold">Hekto</div>
                <div>Home</div>
                <div>Pages</div>
                <div>Products</div>
              </div>
              <div></div>
              <div className="flex flex-row gap-4 justify-end absolute bottom-0 right-0 px-4">
                <div>SEARCHSEARCH</div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="h-screen">{children}</div>
      <footer className="flex flex-col justify-center">
        <div className="bg-light-pink">
          <div className="container mx-auto px-4 grid grid-cols-2 relative">
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="text-3xl font-bold">Hekto</div>
              <div className="text-blue-text">Home</div>
              <div className="text-blue-text">Pages</div>
              <div className="text-blue-text">Products</div>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <div className="text-3xl font-bold">Categories</div>
              <div className="text-blue-text">Home</div>
              <div className="text-blue-text">Pages</div>
              <div className="text-blue-text">Products</div>
            </div>
          </div>
        </div>
        <div className="bg-light-blue">
          <div className="flex flex-row  gap-4 justify-center">
            <div className="text-blue-text">English</div>
            <div className="text-blue-text">USD</div>
            <div className="text-blue-text">Wish List</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
