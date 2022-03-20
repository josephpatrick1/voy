import '../styles/globals.css'
import '../styles/frames.css'
import type { AppProps } from 'next/app'
import { CustomTheme } from '../components/customTheme'
import { CssBaseline } from '@mui/material'
import { AuthProvider } from '../contexts/authContext'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <CssBaseline />
    <CustomTheme>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </CustomTheme>
  </>
}

export default MyApp
