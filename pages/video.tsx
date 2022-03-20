import { Box } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import { MainScreen } from '../components/mainScreen'
import { VideoScreen } from '../components/videoScreen'

const Video: NextPage = () => {
    return (
        <Box>
            <Head>
                <title>Voyagez Ici - Vídeo Chamada</title>
            </Head>
            <VideoScreen />
        </Box>
    )
}

export default Video