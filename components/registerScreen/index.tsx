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
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    const handleRegister = async () => {
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
                    <TextField value={name} onChange={(e) => { setName(e.target.value) }} variant="outlined" label="Nome" />
                    <br /><br />
                    <TextField value={email} onChange={(e) => { setEmail(e.target.value) }} variant="outlined" label="E-mail" type="email" />
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
                            onClick={handleRegister}
                        >
                            Cadastrar
                        </Button>
                    </Link>
                    <br /><br />
                    <Typography>
                        Já tem conta? <Link href="/login">Entrar</Link>
                    </Typography>
                </Box>
            </Container>
        </ThemeProvider>
    </>
}