import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { LifeCyclePage } from "../pages/life-cycle-page";
import { UseEffectPage } from "../pages/use-effect-page";
import { UseStatePage } from "../pages/use-state-page";
import SidebarLayout from "../components/layouts/sidebar-layout";
import { LoginPage } from "../pages/auth/login-page";

export const navRoutes = {
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

export const authRoutes = {
  login: {
    link: "/login",
    name: "Login",
  },
  // register: {
  //   link: "/register",
  //   name: "Register",
  // },
};


const router = createBrowserRouter([
  {
    path: "/", element: <SidebarLayout />, children: [
      {
        path: authRoutes.login.link,
        element: <LoginPage />,
      },
      // {
      //   path: authRoutes.register.link,
      //   element: <Navigate to={navRoutes.useStatePage} />,
      // },
      {
        path: navRoutes.homePage.link,
        element: <Navigate to={navRoutes.useStatePage} />,
      },
      {
        path: navRoutes.lifeCyclePage.link,
        element: <LifeCyclePage />,
      },
      {
        path: navRoutes.useEffectPage.link,
        element: <UseEffectPage />,
      },
      {
        path: navRoutes.useStatePage.link,
        element: <UseStatePage />,
      },
    ]
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />
}