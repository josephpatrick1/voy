import { Pause, PlayArrow } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { useEffect, useState } from "react"

export const AudioButton = ({ audioUrl }: { audioUrl: string }) => {

    const [audio, setAudio] = useState<HTMLAudioElement>();
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (audio) {
            if (isPlaying) {
                if (!audio.src) {
                    audio.src = audioUrl;
                }
                audio.play();
            }
            else {
                audio.pause();
            }
        }
    }, [isPlaying])

    useEffect(() => {
        setAudio(new Audio());
    }, [])

    useEffect(() => {
        if (audio) {
            audio.addEventListener('ended', () => setIsPlaying(false));
            return () => {
                audio.removeEventListener('ended', () => setIsPlaying(false));
            };
        }
    }, [audio])

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