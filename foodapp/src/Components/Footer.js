import app_store from '../images/app_store.avif'
import play_store from '../images/play_store.avif'
import swiggyfoot from '../images/swiggy footer.png'
import '../Styles/Footer.css'

function Footer() {
    return(
        <div className='footer'>
                <div className='footer1'>
                    <div className='footer11'>
                        For better experience,download the Swiggy app now
                    </div>
                    <div className='footer12'>
                        <a href='https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader&pli=1'><img src={play_store} alt="play_store"/></a>
                        <a href='https://apps.apple.com/in/app/swiggy-food-grocery-dineout/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage'><img src={app_store} alt="app_store"/></a>
                    </div>
                </div>
                <footer>
                    <div className='footer2'>
                        <div className='footer21'>
                            <img src={swiggyfoot} alt="swiggy logo"/>
                            <div>© 2023 Bundl</div>
                            <div>Technologies Pvt. Ltd</div>
                        </div>
                        <div className='company'>
                            <ul>
                                <h3>Company</h3>
                                <li>About</li>
                                <li>Careers</li>
                                <li>Team</li>
                                <li>Swiggy One</li>
                                <li>Swiggy Instamart</li>
                                <li>Swiggy Genie</li>
                            </ul>
                        </div>
                        <div className='contact'>
                            <ul>
                                <h3>Contact Us</h3>
                                <li>Help & Support</li>
                                <li>Partner with us</li>
                                <li>Ride with us</li>
                            </ul>
                            <ul className='contact1'>
                                <h3>Legal</h3>
                                <li>Terms & Conditions</li>
                                <li>Cookie Policy</li>
                                <li>Privacy Policy</li>
                            </ul> 
                        </div>
                        <div className='deliverto'>
                            <ul>
                                <h3>We deliver to:</h3>
                                <li>Bangalore</li>
                                <li>Chennai</li>
                                <li>Cohin</li>
                                <li>Mumbai</li>
                                <li>Delhi</li>
                                <li>Hyderabad</li>
                                <li>Kolkata</li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
    );
}
export default Footer;