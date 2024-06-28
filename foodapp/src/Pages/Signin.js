import '../Styles/signin.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        // Handle HTTP errors
        const errorText = await response.text();
        throw new Error(errorText || 'Login failed');
      }

      const result = await response.json();
      console.log(result);

      if (result.token) {
        localStorage.setItem('token', result.token);
        alert('Login successful');
        navigate('/home'); // Navigate to home or another page on successful login
      } else {
        alert('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Login failed: ' + error.message);
    }
  };

  return (
    <div className='sign'>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="#" onClick={() => navigate('/signup')}>Signup</a></p>
    </div>
  );
}

export default Signin;
