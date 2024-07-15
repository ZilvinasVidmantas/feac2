import React from 'react';
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { LifeCyclePage } from "../pages/life-cycle-page";
import { UseEffectPage } from "../pages/use-effect-page";
import { UseStatePage } from "../pages/use-state-page";
import SidebarLayout from "../components/layouts/sidebar-layout";
import { LoginPage } from "../pages/auth/login-page";
import { StudyProgramPage } from "src/pages/study-program-page";

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
  },
  studyProgramPage: {
   link: "/study-programs",
   name: "Study Programns",
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
        element: <Navigate to={navRoutes.useStatePage.link} />,
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
      {
        path: navRoutes.studyProgramPage.link,
        element: <StudyProgramPage />,
      },
    ]
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />
}