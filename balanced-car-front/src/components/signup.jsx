// src/components/Signup.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup, setUser } from '../features/auth/authSlice';

const Signup = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const user = useSelector((state) => state.auth.user); // Get the current user from the store

  const handleSignup = async (e) => {
    e.preventDefault();
    const email = e.target.elements['signup-email'].value;
    const password = e.target.elements['signup-password'].value;
    const PasswordConfirmation = e.target.elements['signup-password-confirm'].value;

    if (password !== PasswordConfirmation) {
      alert('Passwords do not match');
      return;
    }

    const response = await dispatch(signup({ email, password }));
    if (signup.fulfilled.match(response)) {
      dispatch(setUser(response.payload.resource_owner));
    } else {
      console.error(response.payload ? response.payload.error : response.error.message);
    }
  };

  return (
    <div className="signup-p">
      <h3 className="title">Sign Up</h3>
      {user ? (
        <div>
          <p>
            Current User:
            {user.email}
          </p>
          <button onClick={() => dispatch(setUser(null))}>Log Out</button>
        </div>
      ) : (
        <form id="sign_up_form" onSubmit={handleSignup}>
          <input type="email" id="signup-email" placeholder="Email" required />
          <input type="password" id="signup-password" placeholder="Password" required />
          <input type="password" id="signup-password-confirm" placeholder="Confirm Password" required />
          <button type="submit">Sign Up</button>
          {error && <div className="error">{error}</div>}
        </form>
      )}
    </div>
  );
};

export default Signup;
