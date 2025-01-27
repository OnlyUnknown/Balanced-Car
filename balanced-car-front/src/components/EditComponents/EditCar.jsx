import '../styling/AddCar.scss';
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
    const { item: show_item, loading: showLoading, success: showSuccess, errors: showErrors } = useSelector((state) => state.show);
    const { loading: editLoading, errors: editErrors, success: editSuccess } = useSelector((state) => state.edit);  
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

  useEffect(() => {
    if (show_item) {
      setValue('name', show_item.name || '');
      setValue('car_type', show_item.car_type || '');
      setValue('transimission_type', show_item.transmission_type || '');
      setValue('model', show_item.model || '');
      setValue('transimission_milage', show_item.transmission_milage || '');
      setValue('milage', show_item.milage || '');
      setValue('chassis_number', show_item.chassis_number || '');
      setValue('auto_milage', show_item.auto_milage || '');
      setValue('tires_age.tirerf', show_item.tires_age_tirerf || '');
      setValue('tires_age.tirelf', show_item.tires_age_tirelf || '');
      setValue('tires_age.tirerb', show_item.tires_age_tirerb || '');
      setValue('tires_age.tirelb', show_item.tires_age_tirelb || '');
      setValue('oil_milage', show_item.oil_milage || '');
      setValue('buy_limit', show_item.buy_limit || '');
      setValue('last_bid', show_item.last_bid || '');
      setValue('for_bidding', show_item.for_bidding || '');
      setValue('public', show_item.public || '');
      setValue('note', show_item.note || '');
    }
  }, [show_item, setValue]);

  useEffect(() => {
    if (editSuccess)
      toast.success('Car updated successfully');
  }, [editSuccess]);


  const submitForm = async (item, classname) => {
      classname = "car"
      dispatch(addItem({ item, classname }))
      .unwrap()
      .then(() => {
        toast.success('Car Has been edited successfully');
      })
      .catch(() => {
        toast.error('Failed to edit the car. Please try again.');
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
              <button type="submit" disabled={loading || editSuccess}>
                {loading ? <Spinner /> : 'Create'}
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
