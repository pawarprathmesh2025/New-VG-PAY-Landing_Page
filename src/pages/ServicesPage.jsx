import React, { useRef } from "react";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import device4 from "/src/assets/device4.png";

import {
  Volume2,
  QrCode,
  Smartphone,
  BarChart3,
  Shield,
  CheckCircle,
} from "lucide-react";

import "./ServicesPage.css";


const services = [

{
icon: Volume2,
title: "Smart Soundbox",
description:
"Get instant voice alerts for every successful payment.",
features: [
"Real-time voice confirmation",
"Multiple language support",
"Battery backup",
"Easy setup",
"Fast settlement",
],
image: device4,
},

{
icon: QrCode,
title: "Easy Payments",
description:
"Accept payments from any UPI app easily.",
features: [
"Instant confirmation",
"Dynamic QR",
"Zero failures",
"Secure",
"All apps supported",
],
image:
"https://images.unsplash.com/photo-1706759755767-526cdaa02109?auto=format&fit=crop&w=1080&q=80",
},

{
icon: Smartphone,
title: "VG PAY Dashboard",
description:
"Track transactions and business performance.",
features: [
"Live tracking",
"Reports",
"Analytics",
"Multi-device",
"Export data",
],
image:
"https://images.unsplash.com/photo-1551288049-bebda4e38f71",
},

{
icon: BarChart3,
title: "Advanced Analytics",
description:
"Powerful insights to grow faster.",
features: [
"Trends",
"Reports",
"Forecast",
"Insights",
"Growth tools",
],
image:
"https://images.unsplash.com/photo-1460925895917-afdab827c52f",
},

{
icon: Shield,
title: "Secure Payments",
description:
"Bank-level security for peace of mind.",
features: [
"Encryption",
"Fraud protection",
"Secure servers",
"PCI compliant",
"Reliable",
],
image:
"https://images.unsplash.com/photo-1563013544-824ae1b704d3",
},

];



function ServiceCard({ service, index }) {

const ref = useRef();

const { scrollYProgress } = useScroll({

target: ref,

offset: ["start center", "end center"],

});



const scale = useTransform(

scrollYProgress,

[0, 1],

[1, 0.92]

);


const y = useTransform(

scrollYProgress,

[0, 1],

[0, -50]

);


const opacity = useTransform(

scrollYProgress,

[0, 1],

[1, 0.8]

);



const Icon = service.icon;



return (

<motion.div

ref={ref}

className="service-card"

style={{

scale,

y,

opacity,

zIndex: 100 - index,

}}

>

<div className="image">

<img src={service.image} />

</div>


<div className="content">

<div className="icon">

<Icon size={24} />

</div>


<h2>{service.title}</h2>

<p>{service.description}</p>


<ul>

{service.features.map((item, i) => (

<li key={i}>

<CheckCircle size={16} />

{item}

</li>

))}

</ul>


<button>

Learn More

</button>


</div>


</motion.div>

);

}



export default function ServicesPage() {

return (

<section className="services">


<div className="header">

<h1>

Everything You Need to

<br />

<span>Accept Payments Smarter</span>

</h1>


<p>

Premium fintech experience with modern animations

</p>


</div>



<div className="stack-container">

{services.map((service, index) => (

<ServiceCard

key={index}

service={service}

index={index}

/>

))}

</div>


</section>

);

}
