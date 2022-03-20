import { PlayArrow } from "@mui/icons-material";
import { IconButton, ListItem, ListItemText, Toolbar } from "@mui/material";
import { HeaderBack } from "../headerBack"
import { AudioButton } from "./audioButton";

export const GreetingsScreen = () => {
    const items = [{
        id: "1",
        title: "Oi, eu sou Juliano, Prazer!",
        translate: "Bonjour, je suis Juliano, Enchanté!",
        audio: "/audios/3.mp3"
    },
    {
        id: "2",
        title: "Quantos anos você têm?",
        translate: "Quel âge avez-vous?",
        audio: "/audios/4.mp3"
    },
    {
        id: "3",
        title: "O que você faz?",
        translate: "Qu'est-ce que vous faites",
        audio: "/audios/5.mp3"
    },
    {
        id: "4",
        title: "Desculpe-me, você pode me dizer como ir ao centro da cidade?",
        translate: "Excusez-moi, pourriez-vous m'indiquer comment me rendre au centre-ville?",
        audio: "/audios/1.mp3"
    }, {
        id: "5",
        title: "Eu gostaria de uma cerveja, um copo de vinho, um café, um copo de água, por favor.",
        translate: "Je voudrais une bière, un verre de vin, un café, un verre d'eau, s'il vous plaît.",
        audio: "/audios/2.mp3"
    }];
    return <>
        <HeaderBack title="Saudações e Apresentações" />
        <Toolbar />
        {items.map(item => {
            return <ListItem key={item.id} secondaryAction={
                <AudioButton audioUrl={item.audio} />
            }>
                <ListItemText
                    primary={item.translate}
                    secondary={item.title}
                />
            </ListItem>
        })}
    </>
}