/* eslint-disable */
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Error from './Error';
import Spinner from './Spinner';
import { registerUser } from '../features/auth/authActions';

const SignUp = () => {
  const {
    loading, userInfo, error, success,
  } = useSelector(
    (state) => state.auth,
  );
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    // redirect user to login page if registration was successful
    if (success) navigate('/signin');
    // redirect authenticated user to profile screen
    if (userInfo) navigate('/user-profile');
  }, [navigate, userInfo, success]);

  const submitForm = (data) => {
    // check if passwords match
    if (data.password !== data.confirmPassword) {
      alert('Password mismatch');
    }
    // transform email string to lowercase to avoid case sensitivity issues in login
    data.email = data.email.toLowerCase();
    dispatch(registerUser(data));
  };

  return (
    <div className="signup-p">
      <h3 className="title">Sign Up</h3>
      <form onSubmit={handleSubmit(submitForm)}>
        {error && <Error errorMessage={error} />}
        <input type="name" id="signup-name" className="form-input" placeholder="Name" {...register('name', { required: true })} />
        <input type="phone_number" id="signup-phone_number" className="form-input" placeholder="Phone number" {...register('phone_number', { required: true })} />
        <input type="email" id="signup-email" className="form-input" placeholder="Email" {...register('email', { required: true })} />
        <input type="password" id="signup-password" placeholder="Password" {...register('password', { required: true })} />
        <input type="password" id="signup-password-confirm" placeholder="Confirm Password" {...register('confirmPassword', { required: true })} />
        <button type="submit" disabled={loading}>{loading ? <Spinner /> : 'SignUp'}</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default SignUp;
