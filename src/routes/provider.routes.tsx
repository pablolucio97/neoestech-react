import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes";

const appRoutes = createBrowserRouter(routes);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={appRoutes} />;
};

export default AppRoutes;
