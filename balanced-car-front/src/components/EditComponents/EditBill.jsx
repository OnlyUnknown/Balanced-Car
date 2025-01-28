import '../../styling/prof.scss';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify'; // Assuming you're using react-toastify for notifications
import Navigation from '../Navigation';
import Error from '../Error';
import Spinner from '../Spinner';
// import { useUpdateProfileMutation } from '../features/edit/editServices';
import { editItem } from '../../features/edit/editActions';
import { showItem } from '../../features/show/showActions';
/* eslint-disable */
const EditBill = () => {
  const { item: show_item, loading: showLoading, success: showSuccess, errors: showErrors } = useSelector((state) => state.show);
  const { loading: editLoading, errors: editErrors, success: editSuccess } = useSelector((state) => state.edit);
  const { userInfo } = useSelector((state) => state.auth);
  const { register, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();
  let { cid } = useParams();

  useEffect(() => {
    const classname = "car";
    dispatch(showItem({ classname, id }));
  }, [dispatch, cid]);
  
  useEffect(() => {
    if (show_item) {
      setValue('total', show_item.total || '');
      setValue('date', show_item.date || '');
      setValue('note', show_item.note || '');
    }
  }, [show_item, setValue]);

  useEffect(() => {
    if (editSuccess)
      toast.success('Bill updated successfully');
  }, [editSuccess]);

  const submitForm = async (item, classname, id) => {
    classname = "Bill"
    id = cid
      dispatch(editItem({ classname, item, id }))
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
              {/* <input
                id="id"
                type="number"
                {...register("car_id", { required: true })}
                placeholder="Car ID"
              /> */}
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
