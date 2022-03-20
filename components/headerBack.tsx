import { ChevronLeft } from "@mui/icons-material"
import { AppBar, Toolbar, IconButton, Avatar, Typography } from "@mui/material"
import { useRouter } from "next/router"

export const HeaderBack = ({title} : {title: string}) => {

    const router = useRouter();

    const handleBackButton = () => {
        router.back();
    }

    return <>
        <AppBar>
            <Toolbar>
                <IconButton color="inherit" edge="start" aria-label="Voltar" onClick={handleBackButton}>
                    <ChevronLeft />
                </IconButton>
                <Typography variant="body1" sx={{ marginLeft: "10px", flexGrow: 1 }} noWrap>
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    </>
}