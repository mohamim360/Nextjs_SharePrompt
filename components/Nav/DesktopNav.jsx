import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import React from "react";

const DesktopNav = () => {
  const { data: session } = useSession();
  return (
    <div className="flex gap-3 md:gap-5">
      <Link href="/create-prompt" className="black_btn">
        Create Post
      </Link>

      <button type="button" onClick={signOut} className="outline_btn">
        Sign Out
      </button>

      <Link href="/profile">
        <Image
          src={session?.user.image}
          width={37}
          height={37}
          className="rounded-full"
          alt="profile"
        />
      </Link>
    </div>
  );
};

export default DesktopNav;
