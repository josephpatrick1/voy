import React from "react"
import { Box, Typography, Container, TextField, createTheme, Button } from "@mui/material";
import Image from "next/image";
import logo from '../../assets/images/logo.png';
import { ThemeProvider } from "@emotion/react";
import Link from "next/link";

export default function LoginScreen() {

    const colorWhiteSx = { color: "white", borderColor: "white" };

    const theme = createTheme({
        palette: {
            mode: "dark"
        }
    });

    return <>
        <ThemeProvider theme={theme}>
            <Container maxWidth="sm" sx={{
                background: "#040586",
                minHeight: "100%",
                padding: "20px",
                color: "white"
            }}>
                <Box textAlign="center">
                    <Image
                        src={logo}
                        alt="Torre eiffel sobre a bandeira da França"
                        height={'96px'}
                        width={'120px'}
                    />
                    <Typography variant="h4" sx={{ color: "white", fontFamily: "Paris" }}>
                        Voyage ici
                    </Typography>
                    <br />
                    <TextField variant="outlined" label="Usuário" />
                    <br /><br />
                    <TextField variant="outlined" label="Senha" type="password" />
                    <br /><br />

                    <Link href="/principal">
                        <Button
                            sx={{
                                background: "#D80027", color: "white", "&:hover": {
                                    background: "#A80013",
                                }
                            }}
                            variant="contained"
                            fullWidth
                        >
                            Entrar
                        </Button>
                    </Link>
                    <br /><br />
                    <Typography>
                        Novo por aqui? <Link href="/cadastrar">Criar Conta</Link>
                    </Typography>
                </Box>
            </Container>
        </ThemeProvider>
    </>
}