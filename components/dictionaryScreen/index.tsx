import { ChevronRight } from "@mui/icons-material";
import { List, ListItem, Toolbar, Typography, ListItemText, ListItemIcon, IconButton } from "@mui/material"
import { useRouter } from "next/router";
import { HeaderBack } from "../headerBack";

export const DictionaryScreen = () => {
    const items = [{
        id: "1",
        title: "Saudações e apresentações ",
        translate: "Salutations et présentations",
    },
    {
        id: "2",
        title: "Coisas que se falam quando as pessoas se encontram",
        translate: "Les choses que tu dis quand les gens parlent trouver",
    },
    {
        id: "3",
        title: "Perguntas pessoais",
        translate: "Questions personnelles",
    },
    {
        id: "4",
        title: "Conversando em uma festa",
        translate: "Discuter lors d'une fête",
    }];

    const router = useRouter();

    return <>
        <HeaderBack title={"Guia do Francês"} />
        <Toolbar />
        <List>
            {items.map(item => {
                return <ListItem key={item.id} secondaryAction={
                    <IconButton edge="end">
                        <ChevronRight />
                    </IconButton>
                }
                    onClick={() => router.push("/saudacoes")}>
                    <ListItemText
                        primary={item.translate}
                        secondary={item.title}
                    />
                </ListItem>
            })}
        </List>
    </>
}