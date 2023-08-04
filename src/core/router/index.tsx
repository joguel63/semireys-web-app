import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { Route as AppRoute } from "core/enums";
import { Toolbar } from "core/components";
import { AuthModule, CatalogModule, DashboardModule } from "modules";
export const RoutesProvider = () => {
  return (
    <Box minHeight={"100vh"}>
      <Toolbar />
      <Routes>
        <Route path={"/"} element={<CatalogModule />} />
        <Route path={AppRoute.Login} element={<AuthModule />} />
        <Route path={AppRoute.Dashboard + "/*"} element={<DashboardModule />} />
      </Routes>
    </Box>
  );
};
