import { Send } from "@mui/icons-material";
import { Avatar, Box, Button, Grid, List, ListItem, ListItemAvatar, SxProps, TextField, Typography } from "@mui/material"
import { useState } from "react";
import { api } from "../../services/api";

export const ChatContainer = () => {

    const [message, setMessage] = useState("");

    const [messages, setMessages] = useState([{
        id: "1",
        type: "mentor",
        message: "Bonjour!",
        translate: "Olá"
    }]);

    const handleSendButton = async () => {
        const data: any = await api.get("/translate?message=" + encodeURI(message));
        setMessages(e => [...e, {
            id: (new Date().toISOString()),
            type: "user",
            message,
            translate: data.data.result
        },
        {
            id: "x"+(new Date().toISOString()),
            type: "mentor",
            message: "Passons à un appel vidéo!",
            translate: "Vamos fazer uma videochamada!"
        }]);
    }

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
                        return <ListItem key={message.id} sx={sxMessageUser} >
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
                    return <ListItem key={message.id} sx={sxMessageMentor} >
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
        <Grid container sx={{ padding: "0px 5px", position: "fixed", bottom: "0px", background: "#ddd" }}>
            <Grid item xs={8}>
                <TextField value={message} onChange={(e) => setMessage(e.target.value)} variant="standard" sx={{ border: "1px solid gray", margin: "6px" }} />
            </Grid>
            <Grid item xs={4} sx={{ padding: "6px" }}>
                <Button onClick={handleSendButton} size="small" fullWidth sx={{ width: "100%", height: "100%" }} variant="contained">
                    <Send />
                </Button>
            </Grid>
        </Grid>
    </>
}