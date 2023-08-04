import { Route, Routes } from "react-router-dom";
import { Route as AppRoute } from "core/enums";
import { UserManagementModule } from "modules";

const getPath = (path: AppRoute) => path.replace("/dashboard", "");
export const RoutesProvider = () => {
  return (
    <Routes>
      <Route path={getPath(AppRoute.UsersGrid)} element={<UserManagementModule />} />
      <Route path="/" element={<></>} />
    </Routes>
  );
};
