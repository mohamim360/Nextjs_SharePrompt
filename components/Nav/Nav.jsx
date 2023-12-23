"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import DesktopNav from "./DesktopNav";
import { useEffect, useState } from "react";
import { getProviders, signIn, useSession } from "next-auth/react";
import MobileNav from "./MobileNav";

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
  }, []);

  const provider =
    providers &&
    Object.values(providers).map((provider) => (
      <button
        type="button"
        key={provider.name}
        onClick={() => signIn(provider.id)}
        className="black_btn"
      >
        Sign In
      </button>
    ));

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2  flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
      </Link>
      {/* {alert(providers)} */}

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {session?.user ? <DesktopNav /> : <>{provider}</>}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {session?.user ? <MobileNav /> : <>{provider}</>}
      </div>
    </nav>
  );
};

export default Nav;
