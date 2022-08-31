/** jsx?|tsx? file header */
import Link from "next/link";
import { MainLayout } from "@ui/layout";

export default function BlogPage() {
  return (
    <>
      <div>Blog Page</div>
      <Link href="/">
        <a>Go to Home Page</a>
      </Link>
    </>
  );
}

BlogPage.Layout = MainLayout;
