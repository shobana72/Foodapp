import React, { useState } from "react";
import '../Styles/Search.css'
import Navbar from "../Components/Navbar";
import Searchobj from './Searchobj.js'
import biriyani from '../images/searchimages/biriyani.avif'
import dessert from '../images/searchimages/Dessert.avif'
import cakes from '../images/searchimages/cake.avif'
import tea from '../images/searchimages/tea.avif'
import south from '../images/searchimages/southindian.avif'
import north from '../images/searchimages/northindian.avif'
import pizza from '../images/Pizza.avif'
import { useDispatch, useSelector} from "react-redux";
import { addToCart,deleteFromCart } from "../store/Slice/CartSlice.js";

const Search = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    console.log(cartItems);
    const addCart = (item) => { // Modified to pass the entire item object
        dispatch(addToCart(item)); // Dispatching the entire item object
    }
    const [inputValue, setInputValue] = useState(""); 
    const filteredItems = Searchobj.filter(item => 
        item.name.toLowerCase().includes(inputValue.toLowerCase())
    ); 
    
    const searchitems = filteredItems.map(item => (
        <div className="food-container" key={item.name}>
            <li>
                <a href='/food'><img src={item.img} alt={item.name}></img></a>
                <h4><span>Category : </span>{item.name}</h4>
                <h4><span>Price: </span>₹{item.price}/-</h4>
                {cartItems.find(cartItem => cartItem.id === item.id) ? (
                    <button onClick={() => removeItem(item)}>Remove from Cart</button>
                ) : (
                    <button onClick={() => addCart(item)}>Add to Cart</button>
                )}
            </li>
        </div>
    ));
    
    const removeItem = (item) => {
        dispatch(deleteFromCart(item))
    };
    
    const storedata = useSelector((state) => state.cart);
    console.log(storedata, "storedata");
    return (
        <div>
            <Navbar />
            <div className="container">
                <div>
                    <form>
                        <input
                            type='text'
                            id="myInput"
                            placeholder='Search for restaurants and food'
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        ></input>
                    </form>
                </div>
                <div className="dispitems">
                    <h4>Popular Cuisines</h4>
                    <ul>
                        <img src={biriyani} alt="biriyani" />
                        <img src={cakes} alt="cakes" />
                        <img src={dessert} alt="dessert" />
                        <img src={south} alt="south" />
                        <img src={north} alt="north" />
                        <img src={tea} alt="tea" />
                        <img src={pizza} alt="pizza" />
                    </ul>
                </div>
                <div className="popcuisines">
                    <ul className="searchitems">
                        {searchitems}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Search;
