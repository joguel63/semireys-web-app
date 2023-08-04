import { useMemo, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, IconButton, Paper } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { Images, Route } from "core/enums";
import { AppContext } from "core/context";
import { styles } from "./styles";

export const Toolbar: React.FC = () => {
  const navigate = useNavigate();
  const { setOpenDrawer } = useContext(AppContext);
  const location = window.location.pathname;
  const isDashboard = useMemo(() => location.includes(Route.Dashboard), [location]);

  return (
    <Paper elevation={3} sx={styles.root}>
      <Box sx={styles.buttonContainer}>
        {isDashboard && (
          <IconButton onClick={(): void => setOpenDrawer((prev) => !prev)}>
            <Menu />
          </IconButton>
        )}
        <img src={Images.logoSemireys} width={188.15} height={62.54} className="logo" />
      </Box>

      <Button variant="text" onClick={() => navigate(Route.Login)}>
        Administracion
      </Button>
    </Paper>
  );
};
