import React, { useState } from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Home from "@mui/icons-material/Home";
import People from "@mui/icons-material/People";
import KeyIcon from "@mui/icons-material/Key";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

import Link from "next/link";

const data = [
  { icon: <KeyIcon />, label: "Réservations", url: "/admin/booking" },
  { icon: <DirectionsCarIcon />, label: "Véhicules", url: "/admin/cars" },
  { icon: <People />, label: "Utilisateurs", url: "/admin/users" },
];

const SideNav = () => {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  function handleClick() {
    setOpen(!open);
  }

  return (
    <Box
      sx={{
        display: "flex",
        width: 239,
      }}
    >
      <Paper elevation={1} sx={{ width: 239 }}>
        <ListItem>
          <ListItemIcon
            sx={{
              display: "flex",
              fontSize: 26,
              pl: 0.5,
              fontFamily: "Poppins",
            }}
          >
            WILDCARS
          </ListItemIcon>
        </ListItem>
        <Divider />
        <ListItem component="div" disablePadding>
          <ListItemButton
            sx={{ height: 56 }}
            component="a"
            href="/admin/dashboard"
          >
            <ListItemIcon>
              <Home color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="Dashboard"
              primaryTypographyProps={{
                color: "primary",
                fontWeight: "medium",
                variant: "body2",
              }}
            />
          </ListItemButton>
        </ListItem>
        <Box
          sx={{
            bgcolor: open ? "rgba(71, 98, 130, 0.2)" : null,
          }}
        >
          {open &&
            data.map((item) => (
              <Link key={item.label} href={item.url}>
                <ListItemButton
                  className={router.pathname == `${item.url}` ? "active" : ""}
                  sx={{
                    py: 1.7,

                    minHeight: 32,
                  }}
                >
                  <ListItemIcon sx={{ color: "inherit" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: 14,
                      fontWeight: "medium",
                    }}
                  />
                </ListItemButton>
              </Link>
            ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default SideNav;
