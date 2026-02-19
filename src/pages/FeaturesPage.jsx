import React from "react";
import { motion } from "framer-motion";
import "./FeaturesPage.css";

import pos from "../assets/device1.png";
import dashboard from "../assets/phoneimg.png";


const features = [

{
title:"Real-time Dashboard",
desc:"Monitor payments, settlements and performance in real-time with precision.",
icon:"📊"
},

{
title:"Immutable Ledger",
desc:"Secure audit-ready logs with enterprise-grade reliability.",
icon:"💻"
},

{
title:"Priority Support",
desc:"Dedicated support team available whenever your business needs.",
icon:"🎧"
},

{
title:"Team Management",
desc:"Advanced access control for your organisation.",
icon:"👤"
},

{
title:"Device Control",
desc:"Manage all devices from one powerful interface.",
icon:"📱"
},

{
title:"Smart Analytics",
desc:"AI-powered insights to grow your business faster.",
icon:"📈"
}

];



export default function FeaturesPage(){

return(

<section className="features">


{/* LEFT */}

<div className="left">


<motion.p
className="tag"
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{duration:.6}}
>

FEATURES

</motion.p>



<motion.h1
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:.8,delay:.2}}
>

Everything you need to run

<br/>

<span>a modern business</span>

</motion.h1>



<div className="image-area">


<motion.img
src={pos}
className="pos"
initial={{opacity:0,y:80}}
animate={{opacity:1,y:0}}
transition={{duration:1,delay:.4}}
/>



<motion.div
className="dashboard-card"
initial={{opacity:0,x:-60,y:60}}
animate={{opacity:1,x:0,y:0}}
transition={{duration:1,delay:.8}}
>


<div className="dots">

<div className="dot red"/>

<div className="dot yellow"/>

<div className="dot green"/>

</div>


<motion.h2
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:1.2}}
>

₹2,45,980

</motion.h2>


<p>Today's Volume</p>



<motion.div
className="graph"
initial={{scaleX:0}}
animate={{scaleX:1}}
transition={{duration:1,delay:1.4}}
style={{transformOrigin:"left"}}
/>


</motion.div>


</div>


</div>




{/* RIGHT */}

<div className="right">


{features.map((item,index)=>(


<motion.div
className="card"
key={index}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*.1}}
>


<div className="icon">

{item.icon}

</div>


<div>

<h3>{item.title}</h3>

<p>{item.desc}</p>

</div>


</motion.div>


))}


</div>


</section>

);

}
