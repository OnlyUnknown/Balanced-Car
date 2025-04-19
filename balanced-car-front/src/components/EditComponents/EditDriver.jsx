import '../../styling/AddCar.scss';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // Assuming you're using react-toastify for notifications
import { addItem } from '../../features/add/addActions';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { indexItems } from '../../features/show/showActions';
import Navigation from '../Navigation';
import Error from '../Error';
import Spinner from '../Spinner';
import { editItem } from '../../features/edit/editActions';
import { showItem } from '../../features/show/showActions';
/* eslint-disable */
const EditDriver = () => {
    const { items: show_items, item: show_item, loading: showLoading, success: showSuccess, errors: showErrors } = useSelector((state) => state.show);
    const { loading: editLoading, errors: editErrors, success: editSuccess } = useSelector((state) => state.edit);  
  const dispatch = useDispatch();
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  let { cid } = useParams();

  useEffect(() => {
    const classname = 'cars';
    dispatch(indexItems({ classname }));
  }, [dispatch]);

  useEffect(() => {
    const classname = "driver";
    const id = cid;
    dispatch(showItem({ classname, id }));
  }, [dispatch, cid]);

  
  useEffect(() => {
    if (editSuccess === true) {
      const Transfer = () => {
        navigate('/driverinfo/' + cid);
      };
      setTimeout(Transfer, 1000); // Pass Transfer as a function reference, not by invoking it
    }
  }, [editSuccess]);
  useEffect(() => {
    if (show_item) {
      setValue('name', show_item.name || '');
      setValue('identification', show_item.identification || '');
      setValue('nationality', show_item.nationality || '');
      setValue('phone_number', show_item.phone_number || '');
      setValue('car_id', show_item.car_id || '');
    }
  }, [show_item, setValue]);

  const submitForm = async (item, classname, car_id) => {
    car_id = item.car_id;
    classname = "driver";
    dispatch(editItem({ item, classname, car_id, id: cid }))
      .unwrap()
      .then(() => {
        toast.success('Driver added successfully');
      })
      .catch((err = editErrors.message) => {
        toast.error('Failed to add driver, Maybe the car has already a driver. Please try again.');
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
                {...register("car_id")}
                disabled={editSuccess}
              >
                <option value="">Select a car</option>
                {showSuccess === true ? (
                  <>
                    {show_items?.map((car) => (
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
                type="text"
                {...register('name', { required: true })}
                placeholder="Name"
                disabled={editSuccess}
              />
               <input
                type="text"
                {...register('phone_number', { required: true })}
                placeholder="Phone Number"
                disabled={editSuccess}
              />
              <input
                type="text"
                {...register('nationality', { required: true })}
                placeholder="Nationality"
                disabled={editSuccess}
              />
              <input
                type="number" step="any"
                {...register('identification', { required: true })}
                placeholder="Identification"
                disabled={editSuccess}
              />
              <button type="submit" disabled={editLoading || editSuccess}>
                {editLoading ? <Spinner /> : 'Create'}
              </button>
              {editErrors && <Error message={editErrors.message} />}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditDriver;
