import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { LifeCyclePage } from "../pages/life-cycle-page";
import { UseEffectPage } from "../pages/use-effect-page";
import { UseStatePage } from "../pages/use-state-page";

const LifeCyclePageLink = "/life-cycle";

const router = createBrowserRouter([
  {
    path: LifeCyclePageLink,
    element: <LifeCyclePage />,
  },
  {
    path: "/use-effect",
    element: <UseEffectPage />,
  },
  {
    path: "/use-state",
    element: <UseStatePage />,
  },
  {
    path: "/",
    element: <Navigate to={LifeCyclePageLink} />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />
}