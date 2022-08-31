/* eslint-disable @next/next/no-img-element */

import { Menu } from "@headlessui/react";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ConnectButton = ({ isInstalled, isLoading, connect, account }) => {
  if (isLoading) {
    return (
      <div>
        <button
          onClick={() => {}}
          type="button"
          className="inline-flex items-center px-3 py-1.5 border border-gray-500 text-xs font-medium rounded-full shadow-sm text-white bg-darkSecondary hover:bg-darkPrimary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Loading ...
        </button>
      </div>
    );
  }

  if (account) {
    return (
      <Menu as="div" className="ml-3 relative">
        <div>
          <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span className="sr-only">Open user menu</span>
            <img
              className="h-8 w-8 rounded-full"
              src="/images/default_user_image.png"
              alt=""
            />
          </Menu.Button>
        </div>

        <Menu.Items className="z-10 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-darkPrimary ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {() => (
              <button
                disabled={true}
                className="disabled:text-gray-400 text-xs block px-4 pt-2 text-gray-100"
              >
                {`0x${account[2]}${account[3]}${account[4]}....${account.slice(
                  -4
                )}`}
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link href="#">
                <a
                  className={classNames(
                    active ? "bg-darkPrimary border border-gray-400" : "",
                    "block px-4 py-2 text-sm text-gray-100"
                  )}
                >
                  Profile
                </a>
              </Link>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
    );
  }

  if (isInstalled) {
    return (
      <div>
        <button
          onClick={() => {
            connect();
          }}
          type="button"
          className="inline-flex items-center px-3 py-1.5 border border-gray-500 text-xs font-medium rounded-full shadow-sm text-white bg-darkSecondary hover:bg-darkPrimary aniBtn focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Connect Wallet
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <button
          onClick={() => {
            window.open("https://metamask.io", "_ blank");
          }}
          type="button"
          className="inline-flex items-center px-3 py-1.5 border border-gray-500 text-xs font-bold rounded-full shadow-sm text-white bg-darkSecondary aniBtn hover:bg-darkPrimary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          No Wallet
        </button>
      </div>
    );
  }
};

export default ConnectButton;