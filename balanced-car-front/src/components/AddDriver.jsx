import '../styling/AddCar.scss';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // Assuming you're using react-toastify for notifications
import { addItem } from '../features/add/addActions';
import Navigation from './Navigation';
import Error from './Error';
import Spinner from './Spinner';
/* eslint-disable */
const AddDriver = () => {
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

  const submitForm = async (item, classname, car_id) => {
    try {
        car_id = item.car_id
      classname = "driver",
      dispatch(addItem({ item, classname, car_id }));
    } catch (err) {
      toast.error('Failed to add car. Please try again.');
    }
  };
  return (
    <>
      <Navigation />
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="addcar">
          <h3 className="title">Add a bill</h3>
          <div className="shadow-box-add">
            <div className="car_box_pic">
              Pic
            </div>
            <div className="info_box">
              <input
                id="name"
                type="number"
                {...register("car_id")}
                placeholder="Car ID"
              />
              <input
                type="text"
                {...register('name', { required: true })}
                placeholder="Name"
              />
              <input
                type="text"
                {...register('nationality', { required: true })}
                placeholder="Nationality"
              />
              <input
                type="number" step="any"
                {...register('identification', { required: true })}
                placeholder="Identification"
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

export default AddDriver;
