import '../styling/AddCar.scss';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // Assuming you're using react-toastify for notifications
import { addGroup } from '../features/add/addActions';
import Navigation from './Navigation';
import Error from './Error';
import Spinner from './Spinner';
/* eslint-disable */
const AddGroup = () => {
  const { loading, errors, success } = useSelector((state) => state.add);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (success === true) {
      toast.success('Profile updated successfully');
      const Transfer = () => {
        navigate('/');
      };
      setTimeout(Transfer, 1000); // Pass Transfer as a function reference, not by invoking it
    }
  }, [success]);

  const submitForm = async (item) => {
    try {
      dispatch(addGroup({ item }));
    } catch (err) {
      toast.error('Failed to add car. Please try again.');
    }
  };
  return (
    <>
      <Navigation />
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="addcar">
          <h3 className="title">Add group</h3>
          <div className="shadow-box-add">
            <div className="car_box_pic">
              Pic
            </div>
            <div className="info_box">
              <input
                id="name"
                type="text"
                {...register('name', { required: true })}
                placeholder="Name of the Group"
              />
              <input
                type="text"
                {...register('description')}
                placeholder="The description of the group"
              />
              <input
                type="checkbox"
                {...register('public', { required: true })}
              />
              <label htmlFor="public">The publicity of the group</label>
              <input
                type="text" step="any"
                {...register('group_type', { required: true })}
                placeholder="The type of the group"
              />
              <button type="submit" disabled={loading}>
                {loading ? <Spinner /> : 'Create'}
              </button>
              {errors && <Error message={errors.message} />}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddGroup;
