import React from 'react';
import '../Styles/cart.css';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { deleteFromCart, updateQuantity } from "../store/Slice/CartSlice.js";
import { IoAddCircle } from "react-icons/io5";
import { GrClose } from "react-icons/gr";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart);

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
    }

    const incrementItem = (id, quantity) => {
        if (typeof quantity !== 'number') {
            quantity = 1;
        }
        dispatch(updateQuantity({ id, quantity: quantity + 1 }));
    }

    const decrementItem = (id, quantity) => {
        if (typeof quantity !== 'number') {
            quantity = 1;
        }
        if (quantity > 1) {
            dispatch(updateQuantity({ id, quantity: quantity - 1 }));
        }
    }

    const totalPrice = cartItems.items.reduce((total, item) => total + (item.quantity*item.price), 0);



    return (
        <div>
            <Navbar />
            <div className='main-container'>
                <div className='cartcontainer'>
                    <h1>Your Cart</h1>
                    <div>
                        {cartItems.items.map(item => {
                            return (
                                <div key={item._id} className="food-containers">
                                    <ul>
                                        <li>
                                            <a href='/food'><img src={item.imgurl} alt={item.name}></img></a>
                                            <h4><span>Category : </span>{item.foodname}</h4>
                                            <h4><span>Price : </span>₹{item.price}/-</h4>
                                            <ButtonGroup className='buttongrp' variant="contained">
                                                <Button onClick={() => decrementItem(item._id, item.quantity)}><AiOutlineMinus /></Button>
                                                <Button>{item.quantity !== null && item.quantity !== undefined ? item.quantity.toString() : '1'}</Button>
                                                <Button onClick={() => incrementItem(item._id, item.quantity)}><AiOutlinePlus /></Button>
                                            </ButtonGroup>
                                        </li>
                                    </ul>
                                    <GrClose className='my-class1' onClick={() => deleteCart(item)} />
                                </div>
                            );
                        })}
                    </div>
                    <div className='add-Items'>
                        <h2>Add Items</h2><br />
                        <div className='addItem'>
                            <a className='atag' href='/search2'><IoAddCircle className="my-class" /></a>
                        </div>
                    </div>
                </div>
                <div className='cart-container2'>
                    <div className='cart-total'>
                        <h3>Total</h3>
                        {cartItems.items.map((item) => {
                            return (
                                <div key={item._id}>
                                    <div>
                                        <p>{item.foodname} : <span>₹{item.price * (item.quantity)}/-</span></p>
                                    </div>
                                </div>
                            )
                        })}
                        <h4>Total Price : ₹{totalPrice}.00/-</h4>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Cart;
