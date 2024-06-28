import '../Styles/help.css'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import nohelp from '../images/nohelp.gif';


function Help(){
    return(
        <div>
            <Navbar />
            <div  className='container'>
                {/* <img src={nohelp} alt='nohelp'/> */}
            </div>
            <Footer/>
        </div>
            
                
    );
}
export default Help;