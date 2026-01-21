import React from "react";


import Whatsapp from "./Components/Whatsapp"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import { Outlet } from "react-router";



const App= ()=>{



    return(


       <div>

<Header/>

<Outlet/>
<Whatsapp/>

<Footer/>

       </div> 
    )
}

export default App;