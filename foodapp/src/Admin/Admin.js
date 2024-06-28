import React from "react";
import '../Styles/Admin.css'
import logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react'
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Admin=()=>{
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    };
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const handleLogin=()=>{
        if(email==="2004yuvanshankar@gmail.com" && password==="Yuvan@123"){
            notify(); 
            navigateTo("/admin/update");
        }else{
            toast.error("Invalid Email or Password")
        }
    }
    const notify = () => toast.success('Successfully Logged In!', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
        });

    return(
        <div>
            <div className="navbar">
                <a className='atag' href='/'><img src={logo} alt="logo" className='logo' /></a>
                <h3>Swiggy</h3>
            </div>
            <div className='signbar'>
                <div id="signin">
                    <div className="login">
                        <h1>Login</h1>
                        <p>Access the Admin panel using your email and password.</p>
                        <hr/>
                        <form onSubmit={handleLogin} className='signinform'>
                            <div>
                                <label>Email</label><br/>
                                <input type="email" required id='email' name="email" value={email} placeholder="Enter Your Email Id" onChange={(e)=>setEmail(e.target.value)}/><br/>
                            </div>
                            <div>
                                <label>Password</label><br/>
                                <input type="password" required id='password' name="password" value={password} placeholder="Enter Your Password" onChange={(e)=>setPassword(e.target.value)}/><br/>
                            </div>    
                            <button type='submit'>LOGIN</button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
}
export default Admin;