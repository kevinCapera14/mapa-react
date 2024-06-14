import Mapa from "./components/Mapa"
import Header from "./components/Header"
import { useState } from "react"
import About from "./components/About"
import Departamento from "./components/Departamento"
import Footer from "./footer/Footer"

const App = ()=>{
    const [location, setLocation] = useState("Home")
    return <div className="bg-slate-100">
        <Header location={location} setLocation={setLocation}/>
        {
            location === "Home" ? <Mapa setLocation={setLocation}/> : location === "About" ? <About/> :<Departamento location={location}/>
        }
        <Footer/>
    </div> 
}




export default App