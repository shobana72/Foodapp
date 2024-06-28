import React from "react";
import '../Styles/Search.css'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import nohelp from '../images/nooffer.gif'


const Offers =() =>{
    return(
        <div>
            <Navbar/>
            <div className="container">
                <h1>Oops! Currently no offers available...</h1>
                {/* <img src={nohelp} alt="nohelp"/> */}
            </div>
            <Footer/>
        </div>
    )
}
export default Offers;