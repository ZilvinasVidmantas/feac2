import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { LifeCyclePage } from "../pages/life-cycle-page";
import { UseEffectPage } from "../pages/use-effect-page";
import { UseStatePage } from "../pages/use-state-page";
import SidebarLayout from "../components/layouts/sidebar-layout";

export const routes = {
  homePage: "/",
  useEffectPage: "/use-effect",
  useStatePage: "/use-state",
  lifeCyclePage: "/life-cycle"
};

const router = createBrowserRouter([
  {
    path: "/", element: <SidebarLayout />, children: [
      {
        path: routes.homePage,
        element: <Navigate to={routes.useStatePage} />,
      },
      {
        path: routes.lifeCyclePage,
        element: <LifeCyclePage />,
      },
      {
        path: routes.useEffectPage,
        element: <UseEffectPage />,
      },
      {
        path: routes.useStatePage,
        element: <UseStatePage />,
      },
    ]
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />
}