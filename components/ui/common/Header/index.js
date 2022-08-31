import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { useAccount, useNetwork } from "@hooks/web3";
import ConnectButton from "../ConnectButton";

const Header = () => {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setTheme("dark");
  }, []);

  const { account } = useAccount();
  const { network } = useNetwork();
  console.log(network.data);

  return (
    <>
      <div className="border-b dark:border-gray-700 border-gray-300 py-2">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-3 justify-between items-center px-2 md:px-0">
          <Link href="/">
            <a className="flex items-center space-x-2 justify-start">
              {theme === "dark" ? (
                <div className="w-8 h-8 aniBtn">
                  <Image
                    src="/images/logo-dark.png"
                    width={40}
                    height={40}
                    objectFit="contain"
                  />
                </div>
              ) : (
                <div className="w-8 h-8 aniBtn">
                  <Image
                    src="/images/logo-light.png"
                    width={40}
                    height={40}
                    objectFit="contain"
                  />
                </div>
              )}
              <h1 className="font-medium hidden aniBtn md:flex md:text-md lg:text-xl underline underline-offset-2 decoration-2">
                dqvblock.com
              </h1>
            </a>
          </Link>
          <div className="space-x-4 font-medium text-gray-800 dark:text-gray-400 hidden md:flex items-center justify-center ">
            {menus.map((menu) => (
              <Link href={menu.href} key={menu.id}>
                <a className="cursor-pointer aniBtn hover:border-b-4 border-gray-400  dark:hover:text-gray-200">
                  {menu.title}
                </a>
              </Link>
            ))}
          </div>

          <div className="justify-end flex items-center space-x-2 md:space-x-4">
            <a
              className="aniBtn cursor-pointer"
              onClick={() => window.open("https://github.com/vugomars")}
            >
              <FaGithub />
            </a>
            <span className="aniBtn">
              {theme === "dark" ? (
                <div className="w-5 h-5 cursor-pointer">
                  <Image
                    src="/icons/sun.png"
                    width={35}
                    height={35}
                    objectFit="contain"
                    onClick={() => setTheme("light")}
                  />
                </div>
              ) : (
                <div className="w-5 h-5 cursor-pointer">
                  <Image
                    src="/icons/moon.png"
                    width={35}
                    height={35}
                    objectFit="contain"
                    onClick={() => setTheme("dark")}
                  />
                </div>
              )}
            </span>
            <ConnectButton
              account={account.data}
              connect={account.connect}
              isLoading={account.isLoading}
              isInstalled={account.isInstalled}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const menus = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },

  {
    id: 2,
    title: "Guide",
    href: "#",
  },
  {
    id: 3,
    title: "Project",
    href: "#",
  },
  {
    id: 4,
    title: "Resource",
    href: "#",
  },
  {
    id: 5,
    title: "Tutorial",
    href: "#",
  },
];

export default Header;
