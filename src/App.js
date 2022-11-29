import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout";
import BlueLayout , {loader} from "./layout/blueLayout";

function App() {

  const router = createBrowserRouter([
    {
      path : "/",
      element: <Layout/>,
      children:[
        {
          path : "/green",
          element: <div style={{width : "100%" , height : "500px" , backgroundColor : "green"}}><Outlet/></div>,
          children : [
            {
              path:"/green/1",
              element :<p style={{color:"red" , fontSize : "80px"}}>1</p>
            }
          ]
        },
        {
          path : "/blue",
          element: <BlueLayout/>
        },
        {
          path : "/blue/:id",
          element: <BlueLayout/>,
          loader : loader
        },
        {
          path : "/red",
          element: <div style={{width : "100%" , height : "500px" , backgroundColor : "red"}}/>
        }
      ]
    },

    {
      path : "/login",
      element : <div>login page</div>
    }
  ])

  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
