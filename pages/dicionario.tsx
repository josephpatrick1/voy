import { Box } from "@mui/material"
import Head from "next/head"
import { DictionaryScreen } from "../components/dictionaryScreen";

export const Dicionario = () => {
    return (
        <Box>
            <Head>
                <title>Voyagez Ici - Dicionario</title>
            </Head>
            <DictionaryScreen />
        </Box>
    )
};

export default Dicionario;