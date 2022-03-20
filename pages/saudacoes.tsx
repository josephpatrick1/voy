import { Box } from "@mui/material"
import Head from "next/head"
import { GreetingsScreen } from "../components/greetingsScreen";

export const Mentor = () => {
    return (
        <Box>
            <Head>
                <title>Voyagez Ici - Saudações</title>
            </Head>
            <GreetingsScreen />
        </Box>
    )
};

export default Mentor;