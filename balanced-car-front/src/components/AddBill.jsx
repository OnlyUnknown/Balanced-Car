import '../styling/AddCar.scss';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // Assuming you're using react-toastify for notifications
import { addItem } from '../features/add/addActions';
import { indexItems } from '../features/show/showActions';
import Navigation from './Navigation';
import Error from './Error';
import Spinner from './Spinner';
import SearchableDropdown from './Searchable';

/* eslint-disable */
const AddBill = () => {
  const [value, setValue] = useState("Select option...");
  const { loading, errors, success } = useSelector((state) => state.add);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { items, success: success2 } = useSelector((state) => state.show);
  let cars = [];
  // State to hold selected car_id
  const [selectedCarId, setSelectedCarId] = useState('');

  useEffect(() => {
    const classname = 'cars';
    dispatch(indexItems({ classname }));
  }, [dispatch]);

  useEffect(() => {
    if (success === true) {
      toast.success('Profile updated successfully');
      const Transfer = () => {
        navigate(`/bills/${selectedCarId}`); // Pass selectedCarId to the next page
      };
      setTimeout(Transfer, 1000); // Pass Transfer as a function reference, not by invoking it
    }
  }, [success, selectedCarId, navigate]);

  const submitForm = async (item) => {
    try {
      const { car_id } = item;
      setSelectedCarId(car_id); // Set car_id to the state
      const classname = "bill";
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
              <select
                {...register("car_id", { required: true })}
                disabled={success}
              >
                <option value="" hidden>Select a car</option>
                {success2 === true ? (
                  <>
                    {items.map((car) => (
                      <option key={car.id} value={car.id}>
                        {car.name}
                      </option>
                    ))}
                  </>
                ) : (
                  <option value="">No cars available</option>
                )}
              </select>
              <input
                type="number" step="any"
                {...register('total', { required: true })}
                placeholder="Total"
                disabled={success}
              />
              <input
                type="date"
                {...register('date', { required: true })}
                placeholder="Date"
                disabled={success}
              />
              <textarea
                type="text"
                {...register('note')}
                placeholder="Note"
                disabled={success}
              />
              
              <button type="submit" disabled={loading || success }>
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

export default AddBill;
