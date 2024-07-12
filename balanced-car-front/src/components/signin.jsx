/* eslint-disable */
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Error from './Error';
import Spinner from './Spinner';
import { userLogin } from '../features/auth/authActions';



const SigninScreen = () => {
  const { loading, userInfo, error } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  // redirect authenticated user to profile screen
  useEffect(() => {
    if (userInfo) {
      navigate('/main')
    }
  }, [navigate, userInfo])

  const submitForm = (data) => {
    dispatch(userLogin(data))
  }


  return (
  //     <form onSubmit={handleSubmit(submitForm)}>
  //       <div className='form-group'>
  //         <label htmlFor='email'>Email</label>
  //         <input
  //           type='email'
  //           className='form-input'
  //           {...register('email')}
  //           required
  //         />
  //       </div>
  //       <div className='form-group'>
  //         <label htmlFor='password'>Password</label>
  //         <input
  //           type='password'
  //           className='form-input'
  //           {...register('password')}
  //           required
  //         />
  //       </div>
  //       <button type='submit' className='button'>
  //         Login
  //       </button>
  //     </form>
  //   )
  // }

  // const Signin = () => (
    <form onSubmit={handleSubmit(submitForm)}>
      {error && <Error errorMessage={error} />}
      <div className="signup-p">
        <div className="shadow-box">
          <h3 className="title-sign">Sign In</h3>
          <input
            placeholder="Email"
            type="email"
            className="form-input"
            {...register('email', { required: true })}
          />
          <input
            placeholder="Password"
            type="password"
            className="form-input"
            {...register('password', { required: true })}
          />
          <button type='submit' className='button' disabled={loading}>
        {loading ? <Spinner /> : 'Sign In'}
      </button>
        </div>
      </div>
    </form>
  );
};

export default SigninScreen;
