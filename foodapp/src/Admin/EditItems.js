import React, { useEffect, useState } from "react";
import Adminheader from "../Components/Adminheader";
import {useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EditItems=()=>{
    const{id}=useParams()
    const [foodData, setFoodData] = useState({
        foodname: "",
        imgurl: "",
        price: "",
        description: "",
        category: ""
    })

    useEffect(()=>{
        fetch(`http://localhost:5000/foods/${id}`).then((res)=>res.json()).then((data)=>setFoodData(data));
    })

    const handleUpdate=(event)=>{
        event.preventDefault();
        const form=event.target;
        const foodname=form.foodname.value;
        const imgurl=form.imgurl.value;
        const price=form.price.value;
        const description=form.description.value;
        const category=form.category.value;

        const foodObj={
            foodname,imgurl,price,description,category
        }
        console.log(foodObj);

        fetch(`http://localhost:5000/food/${id}`,{
            method:'PATCH',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(foodObj)
        }).then((res)=> res.json())
        .then((data)=>{
            toast.success("Food updated succesfully");
            window.location.href = '/admin/update';
        })
    }
    return(
        <div>
            <Adminheader/>
            <div className="admin">
                <div className="admin-container">
                    <form onSubmit={handleUpdate} className='uploadform'>
                        <div>
                            <label htmlFor="foodname" value="foodname">Food Name</label><br/>
                            <input type="text" id='foodname' name='foodname' placeholder="Enter food name" defaultValue={foodData.foodname}/><br/>
                        </div>
                        <div>
                            <label htmlFor="imgurl" value="imgurl">Image URL</label><br/>
                            <input type='text' id="imgurl" name="imgurl" placeholder="Enter Image URL" defaultValue={foodData.imgurl}/>
                        </div>
                        <div>
                            <label htmlFor="price" value="price">Price</label><br/>
                            <input type="text" id="price" name="price" placeholder="Enter Price" defaultValue={foodData.price}/>
                        </div>
                        <div>
                            <label htmlFor="description" value="description">Description</label><br/>
                            <textarea id="description" name="description" rows="4" cols="100" placeholder="Description" defaultValue={foodData.description}></textarea>
                        </div>
                        <div>
                            <label htmlFor="category" value="category">Category</label><br/>
                            <input id="category" name="category" type="text" placeholder="Category" defaultValue={foodData.category}/> 
                        </div>
                        <button type="submit">Update Food</button>
                    </form>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
}
export default EditItems;