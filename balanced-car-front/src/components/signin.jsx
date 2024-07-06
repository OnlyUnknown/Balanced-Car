import '../styling/signup.scss';
import { useForm } from 'react-hook-form';
const SignScreen = () => {
  const { register, handleSubmit } = useForm()

  const submitForm = (data) => {
    console.log(data.email)
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
  <div className="signup-p">
    <div className="shadow-box">
      <h3 className="title-sign">Sign In</h3>
      {/* <input placeholder="Email" /> */}
      <input
      placeholder='Email'
          type='email'
          className='form-input'
          {...register('email')}
          required
        />
      {/* <input placeholder="Pass" /> */}
      <input
      placeholder='Password'
          type='password'
          className='form-input'
          {...register('password')}
          required
        />
      <button type="submit">Sign in</button>
    </div>
  </div>
  </form>
)};

export default SignScreen;
