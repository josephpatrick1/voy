import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';
import Image from "next/image"
import logo from "../../assets/images/logo.png"
import { useAuth } from '../../contexts/authContext';
import { useRouter } from 'next/router';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function RightDrawer() {

  const {signOut} = useAuth();
  const router = useRouter();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event &&
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };



  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 200 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button onClick={() => {
          signOut();
          router.push("/login");
        }}>
          <ListItemText primary={"Desconectar"} />
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  const anchor = "right";

  return (
    <div>
      <AppBar>
        <Toolbar>
          <Image
            src={logo}
            alt="Torre eiffel sobre a bandeira da França"
            height={'32px'}
            width={'40px'}
          />
          <Typography
            sx={{ flexGrow: 1, fontFamily: "Paris", marginLeft: "4px" }}
            variant="h6"
            component="div"
          >
            Voyagez Ici
          </Typography>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="Menu de Navegação"
            onClick={toggleDrawer(anchor, true)}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
        onOpen={toggleDrawer(anchor, true)}
      >
        {list(anchor)}
      </SwipeableDrawer>
    </div>
  );
}
