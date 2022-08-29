import Link from "next/link";
import { MainLayout } from "@components/ui/layout";
import { useWeb3 } from "@components/provider";
import { useAccount } from "@hooks/web3/useAccount";
import { useEffect } from "react";

export default function Home() {
  const { data } = useAccount("Params here");
  console.log(data);

  return (
    <div>
      <div className="text-3xl">Home Page</div>
      <Link href="/blog">
        <a>
          <button>Go to Blog Page</button>
        </a>
      </Link>
    </div>
  );
}

Home.Layout = MainLayout;
