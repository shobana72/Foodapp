import '../Styles/signin.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, fireDB } from '../Firebase/FirebaseConfig';
import { addDoc, collection } from 'firebase/firestore';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const result = await response.json();
    console.log(result);
    if (response.ok) {
      alert('Signup successful');
      navigate('/login');  // Navigate to login page on successful signup
    } else {
      alert('Signup failed');
    }
  };

  return (
    <div className='sign'>
      <h1>Signup</h1>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Signup</button>
      </form>
      <p>Already have an account? <a href="#" onClick={() => navigate('/signin')}>Login</a></p>
    </div>
  );
}

export default Signup;
