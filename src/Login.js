//
//
import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/');
      })
      .catch((e) => alert(e.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/');
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
          alt=''
        />
      </Link>
      Email:<h2>test@test.com</h2>
      Password:<h2>test1234</h2>
      <div className='login__container'>
        <h1>Sign In</h1>
        <form action=''>
          <h5>Email</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type='email'
          />
          <h5>Password</h5>
          <input
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            type='password'
          />
          <button onClick={login} type='submit' className='login__signInButton'>
            Sign In
          </button>
        </form>
        <p>By signing-in you agree to Amazon's Conditions of Use and Sale</p>
        <button onClick={register} className='login__registerButton'>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
