import React from "react";
import { createTheme, ThemeProvider } from "@mui/material"

export const CustomTheme = ({children}: { children: React.ReactChild }) => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#040586',
            },
            secondary: {
                main: '#D80027',
            },
            background: {
                paper: "#eee"
            }
        },
    });

    return <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
}