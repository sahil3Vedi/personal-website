// NEXT
import { AppProps } from 'next/app'
import { useEffect } from 'react-gtm-module'
// CSS
import 'antd/dist/antd.css'
import '../css/antoverride.css'
import '../css/global.css'

function MyApp({ Component, pageProps }: AppProps) {
    return (<Component {...pageProps}/>)
}

export default MyApp
