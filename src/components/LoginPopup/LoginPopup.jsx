import React from 'react'
import './LoginPopup.scss'
import { assets } from '../../assets/assets'
import { useState } from 'react'


const LoginPopup = ({setShowLogin}) => {
  const [currState, setCurrState] = useState('Sign Up')

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [formErrors, setFormErrors] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let errors = {};
    let isValid = true;

    // Validate username
    if (!formData.username.trim()) {
      errors.username = 'Username is required';
      isValid = false;
    } else {
      errors.username = '';
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      errors.email = 'Invalid email address';
      isValid = false;
    } else {
      errors.email = '';
    }

    // Validate password
    if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
      isValid = false;
    } else {
      errors.password = '';
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form is valid. Submitting...');
      // Perform form submission or other actions
    }
  };


  return (
    <div className="login__popup">
      <form className="login__popup__container" onSubmit={handleSubmit}>
        <div className="login__popup__title">
          <h2>{currState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login__popup__inputs">
          {currState==="Login"?<></>: <input type="text" placeholder='Your Name' required />}
          <input type="email" placeholder='Your Email' required />
          <input type="password" placeholder='Password' required />
        </div>
        <button>{currState==="Sign Up"?"Create account":"Login"}</button>
        <div className="login__popup__condition">
          <input className="login__popup__checkbox" type="checkbox" name="checkbox" id="checkbox" required />
          <label htmlFor="checkbox">By continuing, I agree to the terms of use & privacy policy.</label>
        </div>
        {currState==='Login'
        ?<p>Create a new account? <span onClick={()=>setCurrState('Sign Up')}>Click here!</span></p>
        :<p> Already have an account? <span onClick={()=>setCurrState('Login')}>Login here</span></p>
      }
        
      </form>

    </div>
  )
}

export default LoginPopup
