import { CalendarMonth, EmojiEvents, MenuBook, Person, School } from "@mui/icons-material"
import { Box, Card, CardContent, CardMedia, Grid, Toolbar, Typography } from "@mui/material"
import { useRouter } from "next/router"
import { Progress } from "../progress"
import RightDrawer from "../rightDrawer"

export const MainScreen = () => {

    const router = useRouter();

    const items = [{
        id: "1",
        name: "Mentoria Imersão",
        icon: <School />,
        onClick: () => {
            router.push("/mentoria")
        }
    },
    {
        id: "2",
        name: "Guia do Francês",
        icon: <MenuBook />,
        onClick: () => {
            router.push("/dicionario")
        }
    }];

    const news = [{
        id: "1",
        title: "Como melhorar seu Francês?",
        image: "https://www.blogsenacsp.com.br/wp-content/uploads/2017/03/imagem_post11.jpg",
        resume: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt"
    },
    {
        id: "2",
        title: "Francês é difícil?",
        image: "https://www.bresil.campusfrance.org/sites/pays/files/bresil/styles/mobile_visuel_principal_page/public/dicas-para-aprender-frances.jpg?itok=S6ZOcDDa",
        resume: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt"
    }];

    return <>
        <RightDrawer />
        <Toolbar />
        <Grid container spacing={2} sx={{ padding: "10px" }}>
            <Grid item xs={12}>
                <Typography variant="h6">
                    Bonjour Joseph!
                </Typography>
                <Progress/>
            </Grid>
            {items.map(item => (<Grid item xs={6}>
                <Card key={item.id} onClick={item.onClick} sx={{ height: "100%" }}>
                    <CardContent>
                        <Box sx={{ color: "#D80027" }}>
                            {item.icon} <br />
                        </Box>
                        {item.name}
                    </CardContent>
                </Card>
            </Grid>))}
            <Grid item xs={12}>
                <Card>
                    <CardMedia component="img" src="/images/ads.jpg" alt="Anúncio da Aliança Francesa - Curso de Francês" />
                </Card>
            </Grid>
            <Grid item xs={12}>
                {news.map((newsItem) => {
                    return <Card key={newsItem.id} sx={{ marginTop: "10px" }}>
                        <CardMedia component="img" src={newsItem.image} />
                        <CardContent>
                            <Typography variant="h6">{newsItem.title}</Typography>
                            <br />
                            <Typography variant="body1">
                                {newsItem.resume}
                            </Typography>
                        </CardContent>
                    </Card>
                })}
            </Grid>
        </Grid>
    </>
}