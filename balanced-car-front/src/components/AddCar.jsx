import '../styling/AddCar.scss';
import Navigation from './Nav';
import { addItem } from '../features/add/addActions';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // Assuming you're using react-toastify for notifications
import Error from './Error';
import Spinner from './Spinner';
import { useAddItemMutation } from '../features/add/addServices';


const AddCar = () => {
  const { loading, errors, success } = useSelector((state) => state.add);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [addCar] = useAddItemMutation();
  
  const submitForm = async (item) => {
    try {
      dispatch(addItem({ item }));
      toast.success('Car added successfully!');
    } catch (err) {
      toast.error('Failed to add car. Please try again.');
    }
  };
 return ( <>
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
          <input placeholder="Car type" />
          <input placeholder="Tansition type" />
          <input placeholder="Model" />
          <input placeholder="Transition Kilos" />
          <input placeholder="Milage" />
          <input placeholder="Auto Milage" />
          <div className="tires">
            <input placeholder="Tire age 1" />
            <input placeholder="Tire age 2" />
            <input placeholder="Tire age 3" />
            <input placeholder="Tire age 4" />
          </div>
          <input placeholder="Oil Milage" />
          <input placeholder="Last price" />
          <textarea placeholder="Note" />
          <button type="submit" disabled={loading}>
            {loading ? <Spinner /> : 'Create'}
          </button>
          {errors && <Error message={errors.message} />}
        </div>
      </div>
    </div>
    </form>
  </>
)};

export default AddCar;
