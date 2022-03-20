import React, { useState } from "react"
import { Box, Typography, Container, TextField, createTheme, Button } from "@mui/material";
import Image from "next/image";
import logo from '../../assets/images/logo.png';
import { ThemeProvider } from "@emotion/react";
import Link from "next/link";
import { useAuth } from "../../contexts/authContext";
import { useRouter } from "next/router";

export default function LoginScreen() {
    const theme = createTheme({
        palette: {
            mode: "dark"
        }
    });

    const { signIn } = useAuth();

    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();

    const handleLogin = async () => {
        if(!username || !password) {
            alert("Preencha o Login e Senha")
            return false;
        }
        signIn({
            username,
            password
        });
    }

    return <>
        <ThemeProvider theme={theme}>
            <Container maxWidth="sm" sx={{
                background: "#040586",
                minHeight: "100vh",
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
                    <TextField value={username} onChange={(e) => { setUsername(e.target.value) }} variant="outlined" label="Usuário" />
                    <br /><br />
                    <TextField value={password} onChange={(e) => { setPassword(e.target.value) }} variant="outlined" label="Senha" type="password" />
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
                            onClick={handleLogin}
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