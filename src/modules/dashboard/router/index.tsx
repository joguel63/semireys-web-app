import { Route, Routes } from "react-router-dom";
import { Route as AppRoute } from "core/enums";
import { UserManagementModule, ProductManagementModule } from "modules";

const getPath = (path: AppRoute) => path.replace("/dashboard", "");
export const RoutesProvider = () => {
  return (
    <Routes>
      <Route path={getPath(AppRoute.UsersGrid)} element={<UserManagementModule />} />
      <Route path={getPath(AppRoute.ProductsGrid)} element={<ProductManagementModule />} />
      <Route path="/" element={<></>} />
    </Routes>
  );
};
