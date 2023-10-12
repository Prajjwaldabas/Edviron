import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const Base_URL = process.env.REACT_APP_API_BASE_URL;
  console.log(Base_URL)


  const handleLogin = async (e) => {


    e.preventDefault();

    

    try {
   
      const request = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      };

  
      const response = await fetch(`${Base_URL}/auth/login`, request);

      if (response.ok) {

        const data = await response.json();

        console.log(data)
const token= data.token

        const responseData = {
          token,
          user: {
            name: data.user.name,
            email: data.user.email,
            role: data.user.role,
        
          },
        };
        
        localStorage.setItem('responseData', JSON.stringify(responseData));

        console.log(responseData)


        
    
        navigate('/dashboard')

      } else {
        
        setError('Invalid email or password. Please try again.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };



  return (
    <div className='auth-container fd-col flex jcsa aic'>

        <h2>
            Login
        </h2>
        {error && <p className="error">{error}</p>}

<div className='inputContainer w-100 '>

    <input type="email" name='email' placeholder='Email' value={email}  onChange={(e) => setEmail(e.target.value)}/>

</div>

<div className='inputContainer w-100 '>


<input type="password" name='password' placeholder='Password'   value={password}  onChange={(e) => setPassword(e.target.value)}/>
    
</div>


<div className='w-100'>
    <button className='login-btn' onClick={handleLogin}>Login</button>
</div>

<div className='w-100 flex g-20 mt-20 aic'>
<small className=''>Don't have an account?</small> <span> <Link to='/signup'>Register here</Link></span>
</div>


    </div>
  )
}

export default Login