import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { LifeCyclePage } from "../pages/life-cycle-page";
import { UseEffectPage } from "../pages/use-effect-page";
import { UseStatePage } from "../pages/use-state-page";
import SidebarLayout from "../components/layouts/sidebar-layout";

export const routes = {
  homePage: {
    link: "/",
    name: "Home",
  },
  useEffectPage: {
   link:  "/use-effect",
   name: "Use effect",
  },
  useStatePage: {
    link: "/use-state",
    name: "Use state",
  },
  lifeCyclePage: {
   link: "/life-cycle",
   name: "Lifecycle",
  }
};


const router = createBrowserRouter([
  {
    path: "/", element: <SidebarLayout />, children: [
      {
        path: routes.homePage.link,
        element: <Navigate to={routes.useStatePage} />,
      },
      {
        path: routes.lifeCyclePage.link,
        element: <LifeCyclePage />,
      },
      {
        path: routes.useEffectPage.link,
        element: <UseEffectPage />,
      },
      {
        path: routes.useStatePage.link,
        element: <UseStatePage />,
      },
    ]
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />
}