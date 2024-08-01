import '../styling/prof.scss';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navigation from './Nav';
import Error from './Error';
import Spinner from './Spinner';
import { useUpdateProfileMutation } from '../features/edit/editServices';

const EditProfile = () => {
  const { loading, errors, success } = useSelector((state) => state.edit);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  const [updateProfile] = useUpdateProfileMutation();

  useEffect(() => {
    if (userInfo) {
      // Set default values for the form fields
      setValue('name', userInfo.name || '');
      setValue('phone_number', userInfo.phone_number || '');
    }
  }, [userInfo, setValue]);

  useEffect(() => {
    if (success) navigate('/profile');
  }, [navigate, success]);

  const submitForm = async (data) => {
    try {
      await updateProfile(data).unwrap();
      console.log('Profile updated successfully');
    } catch (err) {
      console.error('Failed to update profile:', err);
    }
  };

  return (
    <div>
      <Navigation />
      <form onSubmit={handleSubmit(submitForm)}>
        <div>
          <figure>{userInfo?.email.charAt(0).toUpperCase()}</figure>
          <div>
            This is edit profile page
            <strong>{userInfo?.email}!</strong>
            You can view this page because you're logged in
          </div>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type='text'
              {...register('name', { required: true })}
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="phone_number">Phone number:</label>
            <input
              id="phone_number"
              type='text'
              {...register('phone_number', { required: true })}
              placeholder="Enter your phone number"
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? <Spinner /> : 'Update Profile'}
          </button>
          {errors && <Error message={errors.message} />}
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
