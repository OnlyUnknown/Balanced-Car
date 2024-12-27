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
const AddCar = () => {
  const { loading, errors, success } = useSelector((state) => state.add);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (success === true) {
      toast.success('Profile updated successfully');
      const Transfer = () => {
        navigate('/main');
      };
      setTimeout(Transfer, 1000); // Pass Transfer as a function reference, not by invoking it
    }
  }, [success]);

  const submitForm = async (item, classname) => {
    try {
      classname = "car"
      dispatch(addItem({ item, classname }));
    } catch (err) {
      toast.error('Failed to add car. Please try again.');
    }
  };
  return (
    <>
      <Navigation />
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="addcar">
          <h3 className="title">Add a car</h3>
          <div className="shadow-box-add">
            <div className="car_box_pic">
              Pic
            </div>
            <div className="info_box">
              <input
                id="name"
                type="text"
                {...register('name', { required: true })}
                placeholder="Car name"
              />
              <input
                type="text"
                {...register('car_type')}
                placeholder="Car type"
              />
              <input
                type="text"
                {...register('transmission_type')}
                placeholder="Transimission type"
              />
              <input
                type="number"
                {...register('model')}
                placeholder="Model"
              />
              <input
                type="number"
                {...register('transmission_milage')}
                placeholder="Transmission Milage"
              />
              <input
                type="number"
                {...register('milage')}
                placeholder="Milage"
              />
              <input
                type="text"
                {...register('chassis_number')}
                placeholder="Chassis number"
              />
              <input
                type="number"
                {...register('auto_milage')}
                placeholder="Auto Milage"
              />
              <div className="tires">
                <label>Tires age</label>
                <input
                  type="month"
                  {...register('tires_age.tirerf')}
                  placeholder="Tire age 1"
                />
                <input
                  type="month"
                  {...register('tires_age.tirelf')}
                  placeholder="Tire age 2"
                />
                <input
                  type="month"
                  {...register('tires_age.tirerb')}
                  placeholder="Tire age 3"
                />
                <input
                  type="month"
                  {...register('tires_age.tirelb')}
                  placeholder="Tire age 4"
                />
              </div>
              <input
                type="text"
                {...register('oil_milage')}
                placeholder="Oil Milage"
              />
              <input
                type="text"
                {...register('buy_limit')}
                placeholder="buy_limit"
              />
              <input
                type="text"
                {...register('last_bid')}
                placeholder="Last Bid"
              />
              <span>
                {' '}
                <label>For bidding</label>
                <input
                  type="checkbox"
                  {...register('for_bidding')}
                />
              </span>
              <span>
                {' '}
                <label>do you want it to be public?</label>
                <input
                  type="checkbox"
                  {...register('public')}
                />
              </span>
              <textarea
                type="text"
                {...register('note')}
                placeholder="Note"
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

export default AddCar;
