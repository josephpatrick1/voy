import { Box } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import { MainScreen } from '../components/mainScreen'

const Principal: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Voyagez Ici - Tela Principal</title>
      </Head>
      <MainScreen />
    </Box>
  )
}

export default Principal