import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const MobileNav = () => {
  const { data: session } = useSession();
  const [toggleDropdown, setToggleDropdown] = useState(false);
  return (
    <div className="flex">
      <Image
        src={session?.user.image}
        width={37}
        height={37}
        className="rounded-full"
        alt="profile"
        onClick={() => setToggleDropdown((prev) => !prev)}
      />

      {toggleDropdown && (
        <div className="dropdown">
          <Link
            href="/profile"
            className="dropdown_link"
            onClick={() => setToggleDropdown(false)}
          >
            My Profile
          </Link>
          <Link
            href="/create-prompt"
            className="dropdown_link"
            onClick={() => setToggleDropdown(false)}
          >
            Create Prompt
          </Link>
          <button
            type="button"
            onClick={() => {
              setToggleDropdown(false);
              signOut();
            }}
            className="mt-5 w-full black_btn"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
