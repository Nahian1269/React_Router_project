import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Home from './Component/Home/Home.jsx';
import Header from "./Component/Header/Header.jsx";
import Footer from "./Component/Footer/Footer.jsx";
import Index from "./Component/Index/Index.jsx";
import Catagory from "./Component/Catagory/Catagory.jsx";
import Catagories from "./Component/Catagories/Catagories.jsx";
import Food_Details from "./Component/Food_details/Food_Details.jsx";
import Food_ing from "./Component/FOOD_ING/Food_ing.jsx";
const router = createBrowserRouter ([
  {
    path: "/",
    element: <Home></Home>,

    children : [
      {
        path: "/header",
        element: <Header></Header>
      }, 
      {
        path: "/index",
        element: <Index></Index>
      },
      {
        path: "/Catagory",
        loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
        element: <Catagory></Catagory>
      },
      {
        path: "/categories",
        element: <Catagories></Catagories>
      },
      {
        path : "/foods/:strCategory" ,
        loader:({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.strCategory}`),
        element: <Food_Details></Food_Details>
      },
      {
        path : "/food_ing/:idMeal",
        loader:({params}) =>fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`) ,
        element: <Food_ing></Food_ing>
      },
      {
        path : "/footer",
        element: <Footer></Footer>
      }
    ],
  },
  
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
