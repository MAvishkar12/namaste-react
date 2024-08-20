import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Heading from "./components/Heading";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


const App = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Avishkar",
    };
    setUserName(data.name);
  });
  return (
    <>
      <Provider store={appStore}>
        <UserContext.Provider value={{ logneedUser: userName }}>
          <Heading />
        </UserContext.Provider>
        <Outlet />
      </Provider>
    </>
  );
};

const Grocery = lazy(() => import("./components/Grocery"));

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            {" "}
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/rest/:resid",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <RouterProvider router={approuter} />);
