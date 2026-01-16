import React from "react";
import { useState,useEffect } from "react";

import ProductContainer from "./ProductContainer";

import Intro from "./Intro";

const introData = [
  {
    title: "Power that Cleans Beyond the Surface",
    desc: "Hard stains fade. Shine returns. Your kitchen breathes again.",
    img: "https://res.cloudinary.com/ds7rnlyst/image/upload/v1768181918/Gemini_Generated_Image_6eanmq6eanmq6ean_1_jt10s4.png"
  },
  {
    title: "Where Hygiene Meets Peace of Mind",
    desc: "Because clean spaces create calm minds and healthy homes.",
    img: "https://res.cloudinary.com/ds7rnlyst/image/upload/v1768280607/Gemini_Generated_Image_t3nhgbt3nhgbt3nh_sqgbzd.png"
  }
];


const Body= ()=>{

const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % introData.length);
    }, 3000); // 3 seconds

    return () => clearInterval(timer);
  }, []);

    return(


       <div>
            <Intro
        title={introData[index].title}
        desc={introData[index].desc}
        img={introData[index].img}
      />

            
        <ProductContainer/>
       </div> 
    )
}

export default Body;