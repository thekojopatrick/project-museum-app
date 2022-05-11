//Styles
import "../styles/globals.css";
import "@splidejs/splide/dist/css/splide.min.css";
import "../styles/sass/main.scss";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
