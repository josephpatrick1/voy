import { Typography } from "@mui/material"
import { LinearProgressWithLabel } from "./linearProgressWithLabel"

export const Progress = () => {
    return <>
        <Typography variant="body2">Vous êtes au niveau 1</Typography>
        <LinearProgressWithLabel value={20} />
    </>
}