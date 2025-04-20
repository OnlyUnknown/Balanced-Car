import '../../styling/AddCar.scss';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify'; // Assuming you're using react-toastify for notifications
import { editItem } from '../../features/edit/editActions';
import { showItem, indexItems } from '../../features/show/showActions';

import Navigation from '../Navigation';
import Error from '../Error';
import Spinner from '../Spinner';
/* eslint-disable */
const AddCar = () => {
    const { items: show_items,item: show_item, loading: showLoading, success: showSuccess, errors: showErrors } = useSelector((state) => state.show);
    const { loading: editLoading, errors: editErrors, success: editSuccess } = useSelector((state) => state.edit);  
  const dispatch = useDispatch();
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
    let { cid } = useParams();

  useEffect(() => {
    if (editSuccess === true) {
      const Transfer = () => {
        navigate('/main');
      };
      setTimeout(Transfer, 1000); // Pass Transfer as a function reference, not by invoking it
    }
  }, [editSuccess]);

    useEffect(() => {
      const classname = 'drivers';
      dispatch(indexItems({ classname }));
    }, [dispatch]);

  useEffect(() => {
    const classname = "car";
    const id = cid;
    dispatch(showItem({ classname, id }));
  }, [dispatch, cid]);

  useEffect(() => {
    if (show_item) {
      const tires_age = show_item.tires_age || '{}';
      const validJson = tires_age.replace(/"=>"/g, '":"').replace(/"(\w+)"/g, '"$1"');
      const tiresAge = JSON.parse(validJson);
      setValue('name', show_item.name || '');
      setValue('car_type', show_item.car_type || '');
      setValue('transmission_type', show_item.transmission_type || '');
      setValue('model', show_item.model || '');
      setValue('transmission_milage', show_item.transmission_milage || '');
      setValue('milage', show_item.milage || '');
      setValue('chassis_number', show_item.chassis_number || '');
      setValue('auto_milage', show_item.auto_milage || '');
      setValue('tires_age.tirerf', tiresAge.tirerf || '');
      setValue('tires_age.tirelf', tiresAge.tirelf || '');
      setValue('tires_age.tirerb', tiresAge.tirerb || '');
      setValue('tires_age.tirelb', tiresAge.tirelb || '');
      setValue('oil_milage', show_item.oil_milage || '');
      setValue('buy_limit', show_item.buy_limit || '');
      setValue('last_bid', show_item.last_bid || '');
      setValue('for_bidding', show_item.for_bidding || false);
      setValue('public', show_item.public || false);
      setValue('note', show_item.note || '');
      setValue('driver_id', show_item.driver?.id || '');
    }
  }, [show_item, setValue]);

  useEffect(() => {
    if (editSuccess)
      toast.success('Car updated successfully');
  }, [editSuccess]);


  const submitForm = async (item, classname, id, driver_id) => {
      classname = "Car"
      id = cid
      driver_id = item.driver_id;
      dispatch(editItem({ classname, item, id, driver_id }))
      .unwrap()
      .then(() => {
        toast.success('Car Has been edited successfully');
      })
      .catch(() => {
        toast.error('Failed to edit the car, the driver may have a car Please try again.');
      });
  };

  return (
    <>
      <Navigation />
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="addcar">
          <h3 className="title">Edit car</h3>
          <div className="shadow-box-add">
            <div className="car_box_pic">
              Pic
            </div>
            <div className="info_box">
            <select
                {...register("driver_id")}
                disabled={editSuccess}
              >
                <option value="">Select a driver</option>
                {showSuccess === true ? (
                  <>
                    {show_items?.map((driver) => (
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
                id="name"
                type="text"
                {...register('name', { required: true })}
                placeholder="Car name"
                disabled={editSuccess}
              />
              <input
                type="text"
                {...register('car_type')}
                placeholder="Car type"
                disabled={editSuccess}
              />
              <input
                type="text"
                {...register('transmission_type')}
                placeholder="Transimission type"
                disabled={editSuccess}
              />
              <input
                type="number"
                {...register('model')}
                placeholder="Model"
                disabled={editSuccess}
              />
              <input
                type="number"
                {...register('transmission_milage')}
                placeholder="Transmission Milage"
                disabled={editSuccess}
              />
              <input
                type="number"
                {...register('milage')}
                placeholder="Milage"
                disabled={editSuccess}
              />
              <input
                type="text"
                {...register('chassis_number')}
                placeholder="Chassis number"
                disabled={editSuccess}
              />
              <input
                type="number"
                {...register('auto_milage')}
                placeholder="Auto Milage"
                disabled={editSuccess}
              />
              <div className="tires">
                <label>Tires age</label>
                <input
                  type="month"
                  {...register('tires_age.tirerf')}
                  placeholder="Tire age 1"
                  disabled={editSuccess}
                />
                <input
                  type="month"
                  {...register('tires_age.tirelf')}
                  placeholder="Tire age 2"
                  disabled={editSuccess}
                />
                <input
                  type="month"
                  {...register('tires_age.tirerb')}
                  placeholder="Tire age 3"
                  disabled={editSuccess}
                />
                <input
                  type="month"
                  {...register('tires_age.tirelb')}
                  placeholder="Tire age 4"
                  disabled={editSuccess}
                />
              </div>
              <input
                type="text"
                {...register('oil_milage')}
                placeholder="Oil Milage"
                disabled={editSuccess}
              />
              <input
                type="text"
                {...register('buy_limit')}
                placeholder="buy_limit"
                disabled={editSuccess}
              />
              <input
                type="text"
                {...register('last_bid')}
                placeholder="Last Bid"
                disabled={editSuccess}
              />
              <span>
                {' '}
                <label>For bidding</label>
                <input
                  type="checkbox"
                  {...register('for_bidding')}
                  disabled={editSuccess}
                />
              </span>
              <span>
                {' '}
                <label>do you want it to be public?</label>
                <input
                  type="checkbox"
                  {...register('public')}
                  disabled={editSuccess}
                />
              </span>
              <textarea
                type="text"
                {...register('note')}
                placeholder="Note"
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

export default AddCar;
