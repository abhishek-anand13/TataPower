import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import user from '../Components/Assets/user.png';
import './Registration.scss';

export const Registration = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: ""
  });

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0])
      });
    }
  };

  return (
    <div>
      <Navbar />
      <div className='item'>
        <h2>Create an account</h2>
        <form>
          <label htmlFor='file'>Upload an image
            <img src={avatar.url || user} alt='Avatar' />
          </label>
          <input type='file' id='file' style={{ display: 'none' }} onChange={handleAvatar} />
          <input type='text' placeholder='Email' name='email' />
          <input type='text' placeholder='Username' name='username' />
          <input type='password' placeholder='Password' name='password' />
        </form>
      </div>
    </div>
  );
};

export default Registration;
