import Link from "next/link";

const EmptyLayout = ({ children }) => {
  return (
    <div>
      {children}
      <Link href="/">
        <a>
          <h1>EmptyLayout</h1>
          <button>Go to Home Page</button>
        </a>
      </Link>
    </div>
  );
};

export default EmptyLayout;
