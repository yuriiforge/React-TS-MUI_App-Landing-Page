import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';

interface Props {
  links: string[];
}

const DrawerComponent = ({ links }: Props) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {links.map((item, i) => (
            <ListItemButton key={i}>
              <ListItemText>{item}</ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        sx={{ marginLeft: 'auto' }}
      >
        <MenuIcon sx={{ color: '#000' }} />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
