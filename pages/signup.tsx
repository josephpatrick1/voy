import { Box } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ModelScreen } from '../components/modelScreen'
import { Intro } from '../components/modelScreen/intro'
import SignUpScreen from '../components/signupScreen'

const SignUp: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Voyagez Ici - Login</title>
      </Head>
      <SignUpScreen />
    </Box>
  )
}

export default SignUp