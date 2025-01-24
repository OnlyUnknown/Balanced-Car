import '../styling/AddCar.scss';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // Assuming you're using react-toastify for notifications
import { addItem } from '../features/add/addActions';
import { indexItems } from '../features/show/showActions';
import Navigation from './Navigation';
import Error from './Error';
import Spinner from './Spinner';
/* eslint-disable */
const AddBill = () => {
  const { loading, errors, success } = useSelector((state) => state.add);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
    const { items, success: success2 } = useSelector((state) => state.show);

  
    useEffect(() => {
      const classname = 'cars';
      dispatch(indexItems({ classname }));
    }, [dispatch]);

  useEffect(() => {
    if (success === true) {
      toast.success('Profile updated successfully');
      const Transfer = () => {
        navigate('/main');
      };
      setTimeout(Transfer, 1000); // Pass Transfer as a function reference, not by invoking it
    }
  }, [success]);

  const submitForm = async (item, classname, car_id) => {
        car_id = item.car_id
      classname = "bill",
      dispatch(addItem({ item, classname, car_id }))
      .unwrap()
      .then(() => {
        toast.success('Driver added successfully');
      })
      .catch((err = errors.message) => {
        toast.error('Failed to add to the group. Please try again.');
      });
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
                {success2 === true ? (
                  <>
                                    <option value="" hidden>Select a car</option>
                    {items.map((car) => (
                      <option key={car.id} value={car.id}>
                        {car.name}, {car.id}
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
