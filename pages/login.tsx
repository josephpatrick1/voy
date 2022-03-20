import { Box } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import LoginScreen from '../components/loginScreen'
import { ModelScreen } from '../components/modelScreen'
import { Intro } from '../components/modelScreen/intro'

const Login: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Voyagez Ici - Login</title>
      </Head>
      <LoginScreen />
    </Box>
  )
}

export default Login