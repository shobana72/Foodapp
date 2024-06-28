import React from 'react';
import Burger from '../images/Burger.avif'
import Cakes from '../images/Cakes.avif'
import Shakes from '../images/Shakes.avif'
import Pasta from '../images/Pasta.avif'
import Pizza from '../images/Pizza.avif'
import Chinese from '../images/Chinese.avif'
import top1 from '../images/top1.avif'
import top3 from '../images/top4.jfif'
import top4 from '../images/top5.jfif'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function Home(){
    return(
        <div>
            <Navbar/>
            
            <div className='containered'>
                <div className='recomend'>
                    <div>
                        <h2>What's on your mind?</h2>
                        <ul  className='currentitems'>
                            <img src={Burger} alt='Burger'></img>
                            <img src={Cakes} alt='Cakes'></img>
                            <img src={Chinese} alt='Chinese'></img>
                            <img src={Shakes} alt='Shakes'></img>
                            <img src={Pasta} alt='pasta'></img>
                            <img src={Pizza} alt='Pizza'></img>
                        </ul>
                    </div>
                </div>
              

                <div className='toprest'>
                    <h2>Top restaurant chains in Coimbatore</h2>
                    <ul  className='toplist'>
                        <li>
                            <img className='topitems' src={top1} alt='top1'></img>
                            <h4 className='topitemnames'>A2B</h4>
                            <div className='topdiv'>
                                <label>South Indian, Chinese, </label><br></br>
                                <label>Peelamedu</label>
                                </div>
                        </li>
                        <li>
                            <img className='topitems' src={top3} alt='top3'></img>
                            <h4 className='topitemnames'>KFC</h4>
                            <div className='topdiv'>
                                <label >Burgers, Biryani</label><br></br>
                                <label>Peelamedu</label>
                            </div>
                        </li>
                        <li>
                            <img className='topitems' src={top4} alt='top4'></img>
                            <h4 className='topitemnames'>McDonald's</h4>
                            <div className='topdiv'>
                                <label>Burgers, Beverages</label><br></br>
                                <label>Peelamedu</label>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='currentloc'>
                    <h2>Restaurants with online food delivery in Coimbatore</h2>
                    <ul>
                        <li >Filter</li>
                        <li >Sort By</li>
                        <li >Fast Delivery</li>
                        <li >New on Swiggy</li>
                        <li >Ratings 4.0+</li>
                        <li >Pure veg</li>
                        <li >Offers</li>
                        <li >Rs. 300-Rs. 600</li>
                        <li >Less than Rs. 300</li>
                    </ul>
                </div>
            </div>
            <div className='container2'>
                <div className='topcities'>
                    <h2>Best Places to Eat Across Cities</h2>
                    <ul className='topcityul'>
                        <li>Best Restaurants in Coimbatore</li>
                        <li>Best Restaurants in Chennai</li>
                        <li>Best Restaurants in Madurai</li>
                        <li>Best Restaurants in Nagercoil</li>
                        <li>Best Restaurants in Dharmapuri</li>
                        <li>Best Restaurants in Vellore</li>
                        <li>Best Restaurants in Bangalore</li>
                        <li>Best Restaurants in Trichy</li>
                        <li>Best Restaurants in Tuticorin</li>
                        <li>Best Restaurants in Mysore</li>
                        <li>Best Restaurants in Coorg</li>
                        <li>Best Restaurants in Delhi</li>
                        <li>Best Restaurants in Mumbai</li>
                        <li>Best Restaurants in Hyderabad</li>
                        <li>Best Restaurants in Cohin</li>
                        <li className='smore'>Show More</li>
                    </ul>
                </div>
                <div className='topcities'>
                    <h2>Best Cuisines Near Me</h2>
                    <ul className='topcityul'>
                        <li>Chinese Restaurants Near Me</li>
                        <li>South Indian Restaurants Near Me</li>
                        <li>Indian Restaurants Near Me</li>
                        <li>Kerala Restaurants Near Me</li>
                        <li>Korean Restaurants Near Me</li>
                        <li>North Indian Restaurants Near Me</li>
                        <li>Seafood Restaurants Near Me</li>
                        <li>Bengali Restaurants Near Me</li>
                        <li>Punjabi Restaurants Near Me</li>
                        <li>Italian Restaurants Near Me</li>
                        <li>Mexican Restaurants Near Me</li>
                        <li className='smore'>Show More</li>
                    </ul>
                </div>
                <div className='toprestnear'>
                    <h2>Explore Every Restaurants Near Me</h2>
                    <ul>
                        <li>Chinese Restaurants Near Me</li>
                        <li>South Indian Restaurants Near Me</li>
                    </ul>
                </div>
            </div>

            <table border={3}>
                <thead>
                    <th>Name</th>
                    <th>Email</th>
                </thead>
                <tbody>
                    <tr>
                    <td>Shobana</td>
                    <td>shobana@gmail.com</td>
                    </tr>
                </tbody>
            </table>
        
            <Footer/>
        </div>
    );
}
export default Home
