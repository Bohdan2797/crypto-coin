import Image from "next/image";
import Link from "next/link";

export function Device() {
  return (
    <section className="max-w-screen-2xl mx-auto mt-20 mb-20">
      <h2
        className="text-2xl w-full px-5 lg:text-3xl lg:w-5xl"
        style={{
          textShadow: "1px 1px 10px #000",
        }}
      >
        You can pay and transfer coins through wallets on any device
      </h2>
      <div className="flex flex-col lg:flex-row gap-y-10 justify-around items-center lg:items-start mt-30">
        <div className="text-4xl text-center lg:text-left w-full lg:w-auto max-w-[300px] mx-auto lg:mx-0">
          <h2 className="mb-10">Web wallet</h2>
          <Link
            href={"#"}
            className="bg-gradient-to-r from-[#2E727A] to-[#2E7A] py-3 px-5 rounded-2xl transform hover:from-[#2E7A] hover:to-[#2E727A] duration-300 transition-colors inline-block"
          >
            PAY
          </Link>
        </div>
        <div className="flex flex-col [&_a]:text-xl gap-5 text-4xl lg:border-l-1 border-gray-500 lg:pl-10 text-center lg:text-left w-full lg:w-auto max-w-[400px] mx-auto lg:mx-0">
          <h2>Mobile wallet</h2>
          <Link
            href={"#"}
            className="flex items-center justify-center gap-3 py-3 px-5 rounded-2xl border-2 border-[#49a6b0] hover:border-[#2E7A] hover:bg-gray-700/50 transform-border transition-colors duration-300"
          >
            <Image
              src="/icons/apple.png"
              width={30}
              height={30}
              alt="Apple Store logo"
            />
            APP STORE
          </Link>
          <Link
            href={"#"}
            className="flex items-center justify-center gap-3 py-3 px-5 rounded-2xl border-2 border-[#49a6b0] hover:border-[#2E7A] hover:bg-gray-700/50 transform-border transition-colors duration-300"
          >
            <Image
              src="/icons/googleplay.png"
              width={30}
              height={30}
              alt="Google Play Store logo"
            />
            GOOGLE PLAY
          </Link>
        </div>
        <div className="flex flex-col font-normal [&_a]:text-xl gap-5 text-4xl lg:border-l-1 border-gray-500 lg:pl-10 text-center lg:text-left w-full lg:w-auto max-w-[300px] mx-auto lg:mx-0">
          <h2>Desktop wallet</h2>
          <Link
            href={"#"}
            className="flex items-center justify-center gap-3 py-3 px-5 rounded-2xl border-2 border-[#49a6b0] hover:border-[#2E7A] hover:bg-gray-700/50 transform-border transition-colors duration-300"
          >
            <Image
              src="/icons/macos.png"
              width={30}
              height={30}
              alt="macOS logo"
            />
            MAC OS
          </Link>
          <Link
            href={"#"}
            className="flex items-center justify-center gap-3 py-3 px-5 rounded-2xl border-2 border-[#49a6b0] hover:border-[#2E7A] hover:bg-gray-700/50 transform-border transition-colors duration-300"
          >
            <Image
              src="/icons/linux.png"
              width={30}
              height={30}
              alt="Linux logo"
            />
            LINUX
          </Link>
          <Link
            href={"#"}
            className="flex items-center justify-center gap-3 py-3 px-5 rounded-2xl border-2 border-[#49a6b0] hover:border-[#2E7A] hover:bg-gray-700/50 transform-border transition-colors duration-300"
          >
            <Image
              src="/icons/windows.png"
              width={30}
              height={30}
              alt="Windows logo"
            />
            WINDOWS
          </Link>
        </div>
      </div>
    </section>
  );
}
