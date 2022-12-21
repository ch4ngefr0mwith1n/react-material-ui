import React from 'react'
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
/* ubacivanje "mainNavbarItems" iz "navbarItems" */
import { mainNavbarItems } from './consts/navbarItems';

const Navbar = () => {
    /**
     * falice samo promjenjiva "drawerWidth"
     * nju cemo da kreiramo 
     */ 
    const drawerWidth = 220;
  return (
    <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            /* dodavanje "background" boje */
            backgroundColor: '#5fbb40', 
            color: '#FFFFFF'
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {/*
            * ovdje cemo se rijesiti niza Stringova i zamijenicemo ih sa nasim "const" fajlom 
            */}
          {mainNavbarItems.map((text, index) => (
            /* na tutorialu pise "<ListItem button key={text.id} " */
            <ListItem key={text.id} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {text.icon}
                </ListItemIcon>
                {/* renderovanje za "label" */}
                <ListItemText primary={text.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        {/*
          * ovdje je pobrisana lista sa 'All mail', 'Trash', 'Spam'
          * isto je izbrisan i "<Divider/> element" */}
      </Drawer>
  )
}

export default Navbar