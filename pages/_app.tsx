import "../styles/global.css"
import { AppProps } from "next/app"

// グローバルなスタイリング
export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
