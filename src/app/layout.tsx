import LeftBar from "@/components/LeftBar";
import "./globals.css";
import RightBar from "@/components/RightBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex justify-between mx-auto max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl h-screen">
          <div className="bg-pink-300 px-2 xsm:px-4 xxl:px-8 ">
            <LeftBar />
          </div>
          <div className="bg-yellow-500 flex-1">{children}</div>
          <div className="bg-red-400 hidden lg:flex ">
            <RightBar />
          </div>
        </div>
      </body>
    </html>
  );
}
