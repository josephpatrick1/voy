import { ChevronLeft, VideoCall } from "@mui/icons-material"
import { AppBar, Toolbar, IconButton, Avatar, Typography, List, ListItem, Box } from "@mui/material"
import { useRouter } from "next/router"

export const HeaderCall = () => {

    const router = useRouter();

    const handleBackButton = () => {
        router.back();
    }

    const handleVideoClick = () => {
        router.push("/video");
    }

    return <>
        <AppBar>
            <Toolbar>
                <IconButton color="inherit" edge="start" aria-label="Voltar" onClick={handleBackButton}>
                    <ChevronLeft />
                </IconButton>
                <Avatar sx={{ width: "35px", height: "35px" }}>J</Avatar>
                <Typography variant="body2" sx={{ marginLeft: "10px", flexGrow: 1 }}>
                    Joseph Patrick <br />
                    Online
                </Typography>
                <IconButton color="inherit" edge="start" aria-label="Ligar" onClick={handleVideoClick}>
                    <VideoCall />
                </IconButton>
            </Toolbar>
        </AppBar>
    </>
}