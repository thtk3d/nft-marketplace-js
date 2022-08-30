import "@styles/globals.css";
import { EmptyLayout } from "@ui/layout";
import { Web3Provider } from "@provider";
import { ThemeProvider } from "next-themes";

// const Noop = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ?? EmptyLayout;
  return (
    <Web3Provider>
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Web3Provider>
  );
}

export default MyApp;
