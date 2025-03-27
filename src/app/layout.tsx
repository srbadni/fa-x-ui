import RightBar from "@/components/RightBar";
import "./globals.css";
import LeftBar from "@/components/LeftBar";

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="fa">
      <body>
        <div className="flex justify-between max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl mx-auto">
          <div className="px-2 sm:px-4 xxl:px-8">
            <RightBar />
          </div>
          <div className="lg:min-w-[600px] border-x-[1px] border-gray-100 flex-1">
            {children}
            {modal}
          </div>
          <div className="hidden lg:flex flex-1 mr-4 xl:mr-8">
            <LeftBar />
          </div>
        </div>
      </body>
    </html>
  );
}
