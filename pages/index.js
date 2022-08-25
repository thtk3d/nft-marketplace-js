import Link from "next/link";
import { MainLayout } from "@components/ui/layout";

export default function Home() {
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
