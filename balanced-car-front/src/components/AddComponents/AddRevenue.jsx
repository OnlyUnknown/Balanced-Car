import '../../styling/AddCar.scss';
import { useEffect, useState  } from 'react';
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
const AddRevenue = () => {
  const { loading, errors, success } = useSelector((state) => state.add);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { items, success: success2 } = useSelector((state) => state.show);
    const [selectedItemId, setSelectedItemId] = useState('');

  useEffect(() => {
    if (success === true) {
      const Transfer = () => {
        navigate(`/revenues/${selectedItemId}`); // Pass selectedItemId to the next page
      };
      setTimeout(Transfer, 1000); // Pass Transfer as a function reference, not by invoking it
    }
  }, [success]);

  useEffect(() => {
    const classname = 'cars';
    dispatch(indexItems({ classname }));
  }, [dispatch]);

  const submitForm = async (item, classname, car_id) => {
        car_id = item.car_id
        setSelectedItemId(car_id); // Set car_id to the state
      classname = "revenue",
      dispatch(addItem({ item, classname, car_id }))
      .unwrap()
      .then(() => {
        toast.success('Revenue added successfully');
      })
      .catch((err = errors.message) => {
        toast.error('Failed to add revenue. Please try again.');
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
                                <option value="" hidden>Select a car</option>
                {success2 === true ? (
                  <>
                    {items.map((car) => (
                        <option key={car.id} value={car.id}>
                            {car.name}
                        </option>
                    ))}
                    {/* <SearchableDropdown
                    options={items}
                    label="name"
                    id="id"
                    selectedVal={value}
                    handleChange={(val) => setValue(val)}/> */}
                  </>
                ) : (
                  <option value="">No cars available</option>
                )}
              </select>
              <input
                type="number" step="any"
                {...register('revenue', { required: true })}
                placeholder="Revenue"
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

export default AddRevenue;
