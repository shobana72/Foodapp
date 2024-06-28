import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer';
import '../Styles/Food.css'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { addToCart,deleteFromCart } from "../store/Slice/CartSlice.js";

const Food =()=>{
    const{id}=useParams()
    const [item, setItem] = useState({
        foodname: "",
        imgurl: "",
        price: "",
        description: "",
        category: ""
    })
    useEffect(()=>{
        fetch(`http://localhost:5000/foods/${id}`).then((res)=>res.json()).then((data)=>setItem(data));
    })

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    console.log(cartItems);
    const addCart = (item) => { // Modified to pass the entire item object
        dispatch(addToCart(item)); // Dispatching the entire item object
    }
    const removeItem = (item) => {
        dispatch(deleteFromCart(item))
    };

    return(
        <div>
            <Navbar/>
            <div className="category">  
                <div className="content" key={item._id}>
                        <img src={item.imgurl} alt={item.foodname} />
                        <h4><span>Category : </span>{item.foodname}</h4>
                        <h4><span>Price: </span>₹{item.price}/-</h4>
                        <p>{item.description}</p>
                        {cartItems.find(cartItem => cartItem._id === item._id) ? (
                        <button onClick={() => removeItem(item)}>Remove from Cart</button>
                        ) : (
                        <button onClick={() => addCart(item)}>Add to Cart</button>
                        )}
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default Food; 
