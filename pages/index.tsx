import { Box } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ModelScreen } from '../components/modelScreen'
import { Intro } from '../components/modelScreen/intro'

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Voyagez Ici</title>
      </Head>
      <div className='frame-bg' />
      <ModelScreen content={<Intro />}>
        <iframe
          style={{width: "100%", height: "100%" , border: "none"}}
          src="/login"
        />
      </ModelScreen>
    </Box>
  )
}

export default Home