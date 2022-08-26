import "@styles/globals.css";
import { EmptyLayout } from "@components/ui/layout";
import { Web3Provider } from "@components/provider";

// const Noop = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ?? EmptyLayout;
  return (
    <Web3Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Web3Provider>
  );
}

export default MyApp;
