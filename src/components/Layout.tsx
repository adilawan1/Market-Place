import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

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
        <nav className="flex bg-violet text-white text-center">
          <div className="container mx-auto color">
            <Link href="/">Home</Link>
          </div>
        </nav>
      </header>
      <div className="h-screen">{children}</div>
      <footer className="flex bg-violet text-white">
        <hr />
        <div className="container mx-auto color text-center">
          <span>I'm here to stay (Footer)</span>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
