import type { AppProps } from "next/app";

//Styles
import "../styles/globals.css";
import "../styles/sass/main.scss";


function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
