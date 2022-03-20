import { Box } from "@mui/material"
import Head from "next/head"
import RegisterScreen from "../components/registerScreen";

export const Cadastro = () => {
    return (
        <Box>
            <Head>
                <title>Voyagez Ici - Cadastro</title>
            </Head>
            <RegisterScreen />
        </Box>
    )
};

export default Cadastro;