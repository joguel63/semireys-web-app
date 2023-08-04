import { useMemo, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FormatListBulleted, AccountTree, People } from "@mui/icons-material";
import { Box, List, ListItemButton, ListItemText, ListItemIcon } from "@mui/material";
import { AppContext } from "core/context";
import { Route } from "core/enums";
import { useStyles } from "./styles";

const drawerItems: { title: string; icon: React.ReactElement; path: string }[] = [
  {
    title: "Ventas",
    icon: <FormatListBulleted />,
    path: "/sales",
  },
  {
    title: "Usuarios",
    icon: <People />,
    path: Route.UsersGrid,
  },
  {
    title: "Inventario",
    icon: <AccountTree />,
    path: "/storage",
  },
];

type DrawerProps = {};
export const Drawer: React.FC<DrawerProps> = ({}) => {
  const location = useLocation().pathname;
  const { openDrawer } = useContext(AppContext);
  const drawerWidth = useMemo(() => (openDrawer ? 240 : 64), [openDrawer]);
  const { item, root } = useStyles(drawerWidth);

  console.log(openDrawer, "casa");

  return (
    <Box sx={root}>
      <List disablePadding>
        {drawerItems.map(({ icon, path, title }) => (
          <ListItemButton
            key={title}
            selected={location.includes(path)}
            sx={item}
            component={Link}
            to={path}
          >
            <ListItemIcon sx={{ color: "#fff" }}>{icon}</ListItemIcon>
            <ListItemText sx={{ color: "#fff" }} primary={title} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};
