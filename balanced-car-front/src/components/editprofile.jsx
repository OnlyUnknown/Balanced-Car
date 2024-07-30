import '../styling/prof.scss';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navigation from './Nav';
import Error from './Error';
import Spinner from './Spinner';
import { editUser } from '../features/edit/editActions';

const EditProfile = () => {
  const {
    loading, userInfo, error, success,
  } = useSelector(
    (state) => state.edit,
  );
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    // redirect user to login page if registration was successful
    if (success) navigate('/profile');
  }, [navigate, userInfo, success]);

  const submitForm = (data) => {
    dispatch(editUser(data));
  };

  return (
    <div>
      <Navigation />
        <form onSubmit={handleSubmit(submitForm)}>
        <div>
        <figure>{userInfo?.email.charAt(0).toUpperCase()}</figure>
        <div>
          This is edit profile page
          `&apos;`
          <strong>
            {userInfo?.email}
            ! 
          </strong>
          `&apos;`
          You can view this page
          because you`&apos;`re logged in
        </div>
        <div>
          name:
          {userInfo?.name} <span><input type='text' defaultValue={userInfo?.name || ""} {...register('name', { required: true })}  name='name'/></span>
        </div>
        <div>
          phone number:
          {userInfo?.phone_number} <span><input type='integer' defaultValue={ userInfo?.phone_number || ""} {...register('phone_number', { required: true })} name='phone_number'/></span>
        </div>
        <button type="submit" disabled={loading}>{loading ? <Spinner /> : 'SignUp'}</button>
      </div>
      </form>
    </div>
  );
};

export default EditProfile;
