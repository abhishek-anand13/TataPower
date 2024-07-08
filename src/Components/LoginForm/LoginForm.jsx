import React from 'react';
import './LoginForm.scss'; 
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

export const LoginForm = () => {
  return (
    <div className='wrapper'>
        <form action=''>
            <h1>Login</h1>
            <div className='input-box'>
                <input type='text' placeholder='Username' required />
                <FaUser className='icon' />
            </div>
            
            <div className='input-box'>
                <input type='password' placeholder='Password' required />
                <RiLockPasswordFill className='icon' />
            </div>

            <div className="remember-forgot">
                <label><input type='checkbox'/> Remember me </label>
                <a href='#'>forgot password?</a>
            </div>

            <button type='submit'>Login</button>

            <div className="register-link">
                <p>Don't have an account? <Link to="/registration">Register here</Link></p>
            </div>
        </form>
    </div>
  );
};
