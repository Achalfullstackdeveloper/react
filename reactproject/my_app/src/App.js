// import { Route, Routes } from "react-router-dom";
import About from "./components/about";
import Contact from "./components/contact";
import Home from "./components/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Constant from "./constant";

         


function App({name}) {
  const HOMESCREEN ='Home Screen View'
  const CONTACTUS = 'Contact Us Screen'
  const ABOUTSCREEN = 'About Us Screen'
  const CONSTANTSCREEN = 'Contant number'

  return (
    // <>

    //     <About
    //     name={ABOUTSCREEN}/> 
    //     <Contact
    //     name={CONTACTUS}/>
    //     <Home
    //     name={HOMESCREEN}/>
    //     </>
<Router>
<Routes>

<Route path="/home" element={<Home name={HOMESCREEN} />} />
<Route path="/contact" element={<Contact name={CONTACTUS} />} />
<Route path="/about" element={<About name={ABOUTSCREEN} />} />
<Route path="/constant" element={<Constant name={CONSTANTSCREEN} />} />
</Routes>
</Router>
  );
 }

export default App;
