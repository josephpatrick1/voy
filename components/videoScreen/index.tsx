import { CallEnd, Mic, MicOff, Videocam, VideocamOff } from "@mui/icons-material"
import { AppBar, Box, Grid, IconButton, Toolbar } from "@mui/material"
import { useRouter } from "next/router";
import { useEffect, useState } from "react"

export const VideoScreen = () => {

    const [seconds, setSeconds] = useState(0);
    const [cameraOn, setCameraOn] = useState(true);
    const [micOn, setMicOn] = useState(true);
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => setSeconds(seconds => seconds + 1), 1000);
    }, [seconds])
    return <>
        <AppBar>
            <Box sx={{ textAlign: "center", width: "100%", padding: "10px" }}>
                Maria Clara <br />
                {Math.floor(seconds / 60).toString().padStart(2, "0")}:{(seconds % 60).toString().padStart(2, "0")}
            </Box>
        </AppBar>
        <Box sx={{
            position: "fixed",
            bottom: "0px",
            height: "60px",
            background: "#040586",
            width: "100%",
            borderRadius: "10px 10px 0px 0px",
            color: "white",
            zIndex: 2
        }}>
            <Box sx={{ width: "30%", height: "2px", background: "#000151", margin: "auto", marginTop: "4px", marginBottom: "6px" }} />
            <Grid container spacing={2} textAlign="center">
                <Grid item xs={4}>
                    <IconButton color="inherit" onClick={() => setCameraOn(e => !e )}>
                        {cameraOn ? <VideocamOff /> : <Videocam />}
                    </IconButton>
                </Grid>
                <Grid item xs={4}>
                    <IconButton color="inherit" onClick={() => setMicOn(e => !e)}>
                        {micOn ? <MicOff /> : <Mic />}
                    </IconButton>
                </Grid>
                <Grid item xs={4}>
                    <IconButton color="inherit" sx={{ background: "#c4362b", "&:hover": { background: "#81221a" } }} onClick={router.back}>
                        <CallEnd />
                    </IconButton>
                </Grid>
            </Grid>
        </Box>
        <Box sx={{ width: "100%", height: "calc(200vh + 300px)", position: "fixed" }} />
        <Box className="video-background">
            <Box className="video-foreground">
                <iframe src="https://www.youtube.com/embed/wvXSXrBpZVU?&autoplay=1&mute=1&start=246" style={{ border: "none" }}></iframe>
            </Box>
        </Box>
    </>
}