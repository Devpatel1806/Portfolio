import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./component/Layout/AppLayout";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Services } from "./Pages/Services";
import { Contact } from "./Pages/Contact";



const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path:"/",
        element: <Home />,
      },
      {
        path:"About",
        element: <About/>
      },
      {
        path:"Services",
        element: <Services/>
      },
      {
        path:"Contact",
        element: <Contact/>
      },
    ],
  },

]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>
};

export default App;
