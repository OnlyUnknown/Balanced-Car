import '../../styling/AddCar.scss';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate,useParams } from 'react-router-dom';
import { toast } from 'react-toastify'; // Assuming you're using react-toastify for notifications
import { indexItems } from '../../features/show/showActions';
import Navigation from '../Navigation';
import Error from '../Error';
import Spinner from '../Spinner';
import { editItem } from '../../features/edit/editActions';
import { showItem } from '../../features/show/showActions';
/* eslint-disable */
const EditRevenue = () => {
    const { item: show_item, loading: showLoading, success: showSuccess, errors: showErrors } = useSelector((state) => state.show);
    const { loading: editLoading, errors: editErrors, success: editSuccess } = useSelector((state) => state.edit);  
  const dispatch = useDispatch();
  const { register, handleSubmit, setValue  } = useForm();
  const navigate = useNavigate();
    let { cid } = useParams();

    useEffect(() => {
        const classname = "revenue";
        const id = cid;
        dispatch(showItem({ classname, id }));
      }, [dispatch, cid]);

  useEffect(() => {
    if (editSuccess === true) {
      const Transfer = () => {
        navigate(`/revenueinfo/${cid}`);
      };
      setTimeout(Transfer, 1000); // Pass Transfer as a function reference, not by invoking it
    }
  }, [editSuccess]);

  useEffect(() => {
    const classname = 'cars';
    dispatch(indexItems({ classname }));
  }, [dispatch]);

  useEffect(() => {
    if (show_item) {
      setValue('revenue', show_item.revenue || '');
      setValue('date', show_item.date || '');
      setValue('note', show_item.note || '');
    }
  }, [show_item, setValue]);

  const submitForm = async (item, classname, id) => {
    classname = "Revenue"
    id = cid
      dispatch(editItem({ classname, item, id }))
      .unwrap()
      .then(() => {
        toast.success('Revenue Has been edited successfully');
      })
      .catch(() => {
        toast.error('Failed to edit the revenue. Please try again.');
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
            {/* <select
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
                    handleChange={(val) => setValue(val)}/> }
                  </>
                ) : (
                  <option value="">No cars available</option>
                )}
              </select> */}
              <input
                type="number" step="any"
                {...register('revenue', { required: true })}
                placeholder="Revenue"
                disabled={editSuccess}
              />
              <input
                type="date"
                {...register('date', { required: true })}
                placeholder="Date"
                disabled={editSuccess}
              />
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

export default EditRevenue;
