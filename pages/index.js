import Link from "next/link";
import { MainLayout } from "@ui/layout";
import { useAccount } from "@hooks/web3";

export default function Home() {
  const { account } = useAccount();
  console.log("account data: ", account.data);
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
