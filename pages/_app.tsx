// NEXT imports
import { AppProps } from 'next/app'
import { useEffect } from 'react-gtm-module'
// CONTEXT imports
import { DarkModeWrapper } from '../context/darkMode'
// CSS imports
import 'antd/dist/antd.css'
import '../css/antoverride.css'
import '../css/global.css'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <DarkModeWrapper>
            <Component {...pageProps} />
        </DarkModeWrapper>
    )
}

export default MyApp


