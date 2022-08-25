import Link from "next/link";
import { MainLayout } from "../components/ui/layout";

export default function Home() {
  return (
    <div>
      <div>Home Page</div>
      <Link href="/blog">
        <a>
          <button>Go to Blog Page</button>
        </a>
      </Link>
    </div>
  );
}

Home.Layout = MainLayout;
