import "../styles/styles.scss";
import type { AppProps } from "next/app";
import "react-phone-input-2/lib/style.css";

function ApolloAPP({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default ApolloAPP;
