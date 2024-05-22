
import React from "react";
import "./Home.scss";
import { Route,createBrowserRouter,RouterProvider,createRoutesFromElements} from "react-router-dom";
import About from "..//..//Pages/About/About";
import Contact from "..//..//Pages/Contact/Contact";
import Blog from "..//..//Pages/Blog/Blog";
import ROUTES from "../../routes"
import Layouts from "../../components/Layouts/Layouts";

  export default function Home() {
    const router=
    createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<Layouts/>}>
          <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
         <Route path={ROUTES.BLOG} element={<Blog />} />
      </Route>
      )
    )
  return (
     <div 
      className="Home"
      style={{
        backgroundImage: `url(${"./image1.jpg"})`,
      }}
  

   >

    <RouterProvider router={router}/>
    </div>
     
  );
}




