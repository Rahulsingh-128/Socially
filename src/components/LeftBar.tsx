// import Image from "next/image";
import Link from "next/link";
import React from "react";
import Image from "./Image";
const LeftBar = () => {
  return (
    <div>
      <h1>Left Side</h1>
      <div className=" overflow-hidden  mb-8">
        {/* <Image
          src="/general/avatar.png"
          alt="rahul singh"
          width={80}
          height={80}
          className=" object-cover rounded-full"
        /> */}
        <div className="w-10 h-10 relative rounded-full overflow-hidden">
          <Image
            path="/general/avatar.png"
            alt="lama dev"
            w={100}
            h={100}
            tr={true}
          />
        </div>

        <Link
          href="/compose/post"
          className="bg-white text-black mt-8 rounded-full w-48 h-48 flex items-center justify-center xxl:hidden"
        >
          <Image path="icons/post.svg" alt="new post" w={48} h={48} />
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
