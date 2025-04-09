import Image from "next/image";
import Link from "next/link";
import React from "react";

const LeftBar = () => {
  return (
    <div>
      <h1>Left Side</h1>
      <div className=" overflow-hidden  mb-8">
        <Image
          src="/general/avatar.png"
          alt="rahul singh"
          width={80}
          height={80}
          className=" object-cover rounded-full"
        />

        <Link
          href="/compose/post"
          className="bg-white text-black mt-8 rounded-full w-48 h-48 flex items-center justify-center xxl:hidden"
        >
          <Image src="icons/post.svg" alt="new post" width={48} height={48} />
        </Link>
        <Link
          href="/compose/post"
          className="bg-white text-black mt-8 rounded-lg w-25 h-18 flex items-center justify-center hidden xxl:block"
        >
          Post
        </Link>
      </div>
    </div>
  );
};

export default LeftBar;
