import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {

  const navigate = useNavigate()


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignup = async (e) => {
    // e.preventDefault();

    console.log("signup called")

    const Base_URL = process.env.REACT_APP_API_BASE_URL;
    console.log(Base_URL)

    try {
    
      const request = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password ,role: 'admin' }),
      };


      const response = await fetch(`${Base_URL}/auth/signup`, request);

      if (response.ok) {

        setSuccess('Signup successful. You can now log in.');
        console.log("Signup successful.")

        navigate('/')


      } else {
       
        const data = await response.json();
        setError(data.error || 'An error occurred during signup.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };







  return (
    <div className='auth-container fd-col flex jcsa aic'>

    <h2>
       Sign Up
    </h2>

    <div className='inputContainer w-100'>


<input type="=text"  name='name' placeholder='Name'  value={name}
            onChange={(e) => setName(e.target.value)}/>

</div>

<div className='inputContainer w-100'>


<input type="=email" name='email' placeholder='Email'    value={email}
            onChange={(e) => setEmail(e.target.value)}/>

</div>

<div className='inputContainer w-100'>


<input type="password" name='password'  placeholder='Password'   value={password}
            onChange={(e) => setPassword(e.target.value)}/>

</div>

<div className='inputContainer w-100'>


<input type="password" name='confirmPassword' placeholder='Confirm Password' />

</div>


<div className='w-100'>
<button className='login-btn' onClick={handleSignup}>Register</button>
</div>

<div className='w-100 flex g-20 mt-20 aic'>
<small className=''>Already have an account?</small> <span> <Link to='/'>Login here</Link></span>
</div>

</div>
  )
}

export default SignUp