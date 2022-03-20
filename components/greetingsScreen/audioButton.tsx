import { Pause, PlayArrow } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { useEffect, useState } from "react"
import useAudio from "../../hooks/useAudio";

export const AudioButton = ({ audioUrl }: { audioUrl: string }) => {

    const [audio] = useState(new Audio());
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            if(!audio.src) {
                audio.src = audioUrl;
            }
            audio.play();
        }
        else {
            audio.pause();
        }
    }, [isPlaying])

    useEffect(() => {
        audio.addEventListener('ended', () => setIsPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setIsPlaying(false));
        };
    })

    return <IconButton
        sx={{
            background: "#D80027",
            color: "white",
            "&:hover": {
                background: "#a5001b"
            }
        }}
        onClick={() => setIsPlaying(e => !e)}
    >
        {isPlaying ? <Pause /> : <PlayArrow />}
    </IconButton>
}