// NEXT
import { AppProps } from 'next/app'
// CSS
import 'antd/dist/antd.css'
import '../css/global.css'

function MyApp({ Component, pageProps }: AppProps) {
    return (<Component {...pageProps}/>)
}

export default MyApp
