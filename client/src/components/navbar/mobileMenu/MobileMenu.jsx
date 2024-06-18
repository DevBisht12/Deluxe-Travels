import * as React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Drawer from "@mui/joy/Drawer";
import { Link } from "react-router-dom";
import List from "@mui/joy/List";
import ListItemButton from "@mui/joy/ListItemButton";
import Menu from "@mui/icons-material/Menu";
import Close from "@mui/icons-material/Close";
import './mobileMenu.css'

export default function DrawerMobileNavigation() {
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <React.Fragment>
      <IconButton variant="outlined" color="neutral" onClick={handleToggle}>
        <Menu />
      </IconButton>
      <Drawer
        open={open}
        onClose={handleToggle}
        anchor="top"
        sx={{
          "& .MuiDrawer-paper": {
            height: "fit-content",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            ml: "auto",
            mt: 1,
            mr: 2,
          }}
        >
          <IconButton onClick={handleToggle} sx={{ position: "initial" }}>
            <Close />
          </IconButton>
        </Box>
        <List
          component="nav"
          sx={{
            flex: "none",
            fontSize: "xl",
            "& > div": { justifyContent: "center" },
          }}
        >
          <ListItemButton onClick={handleToggle}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
          </ListItemButton>
          <ListItemButton sx={{ fontWeight: "lg" }} onClick={handleToggle}>
            <Link to="/services" style={{ textDecoration: 'none', color: 'inherit' }}>Services</Link>
          </ListItemButton>
          <ListItemButton onClick={handleToggle}>
            <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>About</Link>
          </ListItemButton>
          <ListItemButton onClick={handleToggle}>
            <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</Link>
          </ListItemButton>
          <ListItemButton onClick={handleToggle}>Book Now</ListItemButton>
        </List>
      </Drawer>
    </React.Fragment>
  );
}
