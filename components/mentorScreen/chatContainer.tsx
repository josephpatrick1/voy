import { Send } from "@mui/icons-material";
import { Avatar, Box, Button, Grid, List, ListItem, ListItemAvatar, SxProps, TextField, Typography } from "@mui/material"

export const ChatContainer = () => {

    const messages = [{
        id: "1",
        type: "user",
        message: "Olá",
        translate: "Olá"
    },
    {
        id: "2",
        type: "mentor",
        message: "Oi, como vai?",
        translate: "Oi, como vai?"
    }];

    const sxMessageUser: SxProps = {
        background: "#EEEEEE",
        borderRadius: "10px",
        padding: "10px",
        marginTop: "4px"
    }

    const sxMessageMentor: SxProps = {
        background: "#c7c7ea",
        borderRadius: "10px",
        padding: "10px",
        marginTop: "4px"
    }

    return <>
        <Box sx={{ padding: "5px" }}>
            <List>
                {messages.map(message => {
                    if (message.type === "user") {
                        return <ListItem sx={sxMessageUser} >
                            <Avatar>J</Avatar>
                            <Box sx={{ marginLeft: "6px" }}>
                                <Typography variant="body1">
                                    {message.message}
                                </Typography>
                                <Typography variant="body2">
                                    {message.translate}
                                </Typography>
                            </Box>
                            <Box sx={{ flexGrow: 1 }}></Box>
                        </ListItem>
                    }
                    return <ListItem sx={sxMessageMentor} >
                        <Box sx={{ flexGrow: 1 }}></Box>
                        <Box sx={{ marginRight: "6px" }}>
                            <Typography variant="body1">
                                {message.message}
                            </Typography>
                            <Typography variant="body2">
                                {message.translate}
                            </Typography>
                        </Box>
                        <Avatar>J</Avatar>
                    </ListItem>
                })}
            </List>
        </Box>
        <Grid container sx={{padding: "0px 5px", position: "fixed", bottom: "0px", background: "#ddd"}}>
            <Grid item xs={8}>
                <TextField variant="standard" sx={{border: "1px solid gray", margin: "6px"}} />
            </Grid>
            <Grid item xs={4} sx={{padding: "6px"}}>
                <Button size="small" fullWidth sx={{ width: "100%", height: "100%" }} variant="contained">
                    <Send />
                </Button>
            </Grid>
        </Grid>
    </>
}