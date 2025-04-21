import '../../styling/prof.scss';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify'; // Assuming you're using react-toastify for notifications
import Navigation from '../Navigation';
import Error from '../Error';
import Spinner from '../Spinner';
// import { useUpdateProfileMutation } from '../features/edit/editServices';
import { editItem } from '../../features/edit/editActions';
import { showItem, indexItems } from '../../features/show/showActions';
/* eslint-disable */
const EditBill = () => {
  const { items: show_items, item: show_item, loading: showLoading, success: showSuccess, errors: showErrors } = useSelector((state) => state.show);
  const { loading: editLoading, errors: editErrors, success: editSuccess } = useSelector((state) => state.edit);
  const { userInfo } = useSelector((state) => state.auth);
  const { register, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();
  let { cid } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const classname = "bill";
    const id = cid;
    dispatch(showItem({ classname, id }));
  }, [dispatch, cid]);

  useEffect(() => {
        const classname = 'cars';
        dispatch(indexItems({ classname }));
      }, [dispatch]);
  
  useEffect(() => {
    if (show_item) {
      setValue('total', show_item.total || '');
      setValue('date', show_item.date || '');
      setValue('note', show_item.note || '');
      setValue('car_id', show_item.car_id || '');
    }
  }, [showSuccess, setValue]);

  useEffect(() => {
    if (editSuccess)
      {
        const Transfer = () => {
          navigate('/billinfo/' + cid);
        };
        setTimeout(Transfer, 1000); // Pass Transfer as a function reference, not by invoking it
      }
  }, [editSuccess]);

  const submitForm = async (item, classname, id, car_id) => {
    classname = "Bill"
    car_id = item.car_id;
    id = cid
      dispatch(editItem({ classname, item, id, car_id }))
      .unwrap()
      .then(() => {
        toast.success('Bill Has been edited successfully');
      })
      .catch(() => {
        toast.error('Failed to edit the bill. Please try again.');
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
                disabled={editSuccess}
              >
                <option value="" hidden>Select a car</option>
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
                type="number" step="any"
                {...register('total', { required: true })}
                placeholder="Total"
              />
              <input
                type="date"
                {...register('date')}
                placeholder="Date"
              />
              <textarea
                type="text"
                {...register('note')}
                placeholder="Note"
              />
              
              <button type="submit" disabled={editLoading}>
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

export default EditBill;
