import  React from "react"
import ReactDOM from "react-dom/client"
import About from "./Components/About"
import Body from "./Components/Body"
import Error from "./Components/Error"
import ProductDetails from "./Components/ProductDetails";
import { productDetails } from "./Components/ProductContainer";

import Contact from "./Components/Contact"

import App from "./App"

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";

const appRouter= createBrowserRouter([


    {path:"/",

        element:<App/>,

        children:[
            {

                path:"/",
                element:<Body/>
            }
            
            
            ,{path:"/about",

        element:<About/>,
      
        
    },
    {path:"/contact",

        element:<Contact/>,
  
        
    },  {
  path: "/product/:id",
  element: <ProductDetails products={productDetails} />
}],
        errorElement:<Error/>
        
    },


   ]

)





const root= ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider  router={appRouter}/>)