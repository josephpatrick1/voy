import { Box } from "@mui/material"
import Head from "next/head"
import { MentorScreen } from "../components/mentorScreen"

export const Mentor = () => {
    return (
        <Box>
            <Head>
                <title>Voyagez Ici - Mentoria</title>
            </Head>
            <MentorScreen />
        </Box>
    )
};

export default Mentor;