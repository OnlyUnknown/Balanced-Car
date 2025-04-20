import '../../styling/AddCar.scss';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // Assuming you're using react-toastify for notifications
import { addItem } from '../../features/add/addActions';
import { indexItems } from '../../features/show/showActions';
import Navigation from '../Navigation';
import Error from '../Error';
import Spinner from '../Spinner';
/* eslint-disable */
const AddCar = () => {
  const { loading, errors, success } = useSelector((state) => state.add);
  const { items, success: success2 } = useSelector((state) => state.show);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (success === true) {
      const Transfer = () => {
        navigate('/main');
      };
      setTimeout(Transfer, 1000); // Pass Transfer as a function reference, not by invoking it
    }
  }, [success]);

  useEffect(() => {
    const classname = 'drivers';
    dispatch(indexItems({ classname }));
  }, [dispatch]);


  const submitForm = async (item, classname, driver_id) => {
    driver_id = item.driver_id;
      classname = "car"
      dispatch(addItem({ item, classname, driver_id }))
      .unwrap()
      .then(() => {
        toast.success('Car added successfully');
      })
      .catch((err = errors.message) => {
        toast.error('Failed to add car. Please try again.');
      });
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
                disabled={success}
              />
              <input
                type="text"
                {...register('car_type')}
                placeholder="Car type"
                disabled={success}
              />
              <input
                type="text"
                {...register('transmission_type')}
                placeholder="Transimission type"
                disabled={success}
              />
              <input
                type="number"
                {...register('model')}
                placeholder="Model"
                disabled={success}
              />
              <input
                type="number"
                {...register('transmission_milage')}
                placeholder="Transmission Milage"
                disabled={success}
              />
              <input
                type="number"
                {...register('milage')}
                placeholder="Milage"
                disabled={success}
              />
              <input
                type="text"
                {...register('chassis_number')}
                placeholder="Chassis number"
                disabled={success}
              />
              <input
                type="number"
                {...register('auto_milage')}
                placeholder="Auto Milage"
                disabled={success}
              />
              <div className="tires">
                <label>Tires age</label>
                <input
                  type="month"
                  {...register('tires_age.tirerf')}
                  placeholder="Tire age 1"
                  disabled={success}
                />
                <input
                  type="month"
                  {...register('tires_age.tirelf')}
                  placeholder="Tire age 2"
                  disabled={success}
                />
                <input
                  type="month"
                  {...register('tires_age.tirerb')}
                  placeholder="Tire age 3"
                  disabled={success}
                />
                <input
                  type="month"
                  {...register('tires_age.tirelb')}
                  placeholder="Tire age 4"
                  disabled={success}
                />
              </div>
              <input
                type="text"
                {...register('oil_milage')}
                placeholder="Oil Milage"
                disabled={success}
              />
              <input
                type="text"
                {...register('buy_limit')}
                placeholder="buy_limit"
                disabled={success}
              />
              <select
                {...register("driver_id")}
                disabled={success}
              >
                <option value="">Select a driver</option>
                {success2 === true ? (
                  <>
                    {items.map((driver) => (
                      <option key={driver.id} value={driver.id}>
                        {driver.name}
                      </option>
                    ))}
                  </>
                ) : (
                  <option value="">No drivers available</option>
                )}
              </select>
              <input
                type="text"
                {...register('last_bid')}
                placeholder="Last Bid"
                disabled={success}
              />
              <span>
                {' '}
                <label>For bidding</label>
                <input
                  type="checkbox"
                  {...register('for_bidding')}
                  disabled={success}
                />
              </span>
              <span>
                {' '}
                <label>do you want it to be public?</label>
                <input
                  type="checkbox"
                  {...register('public')}
                  disabled={success}
                />
              </span>
              <textarea
                type="text"
                {...register('note')}
                placeholder="Note"
                disabled={success}
              />
              <button type="submit" disabled={loading || success}>
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
