import '../styles/globals.css'
import '../styles/frames.css'
import type { AppProps } from 'next/app'
import { CustomTheme } from '../components/customTheme'
import { CssBaseline } from '@mui/material'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <CssBaseline />
    <CustomTheme>
      <Component {...pageProps} />
    </CustomTheme>
  </>
}

export default MyApp
