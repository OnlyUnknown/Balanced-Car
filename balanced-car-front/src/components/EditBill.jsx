import '../styling/prof.scss';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // Assuming you're using react-toastify for notifications
import Navigation from './Nav';
import Error from './Error';
import Spinner from './Spinner';
import { useUpdateProfileMutation } from '../features/edit/editServices';
import { editUser } from '../features/edit/editActions';
/* eslint-disable */
const EditProfile = () => {
  const { item, loading, success } = useSelector((state) => state.show);
  const dispatch = useDispatch();
  let { cid } = useParams();

  useEffect(() => {
    const classname = "bill";
    const id = cid;
    dispatch(showItem({ classname, id }));
  }, [dispatch, cid]);
  
  useEffect(() => {
    if (userInfo) {
      setValue('name', userInfo.name || '');
      setValue('phone_number', userInfo.phone_number || '');
    }
  }, [userInfo, setValue]);

  useEffect(() => {
    if (success)
      toast.success('Profile updated successfully');
  }, [success]);

  const submitForm = async (data) => {
    try {
      dispatch(editUser({ ...data }));
      
    } catch (err) {
      toast.error('Failed to update profile. Please try again.');
    }
  };

  return (
    <div>
      <Navigation />
      <form onSubmit={handleSubmit(submitForm)}>
        <div>
          <figure>{userInfo?.email.charAt(0).toUpperCase()}</figure>
          <div>
            This is edit Bill page
            <strong>
              {userInfo?.email}
              !
            </strong>
            You can view this page because you&apos;re logged in
          </div>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              {...register('name', { required: true })}
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="phone_number">Phone number:</label>
            <input
              id="phone_number"
              type="text"
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
