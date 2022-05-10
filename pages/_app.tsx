import '../styles/globals.css'
//Styles
import "../styles/sass/main.scss";
import "@splidejs/react-splide/css";


import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
