import '../../styling/AddCar.scss';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addToGroup } from '../../features/add/addActions';
import { indexGroups, indexItems } from '../../features/show/showActions';
import Navigation from '../Navigation';
import Error from '../Error';
import Spinner from '../Spinner';

const AddToGroup = () => {
  const { loading, errors, success } = useSelector((state) => state.add);
  const {
    items, groups, success: success2, successg,
  } = useSelector((state) => state.show);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [selectedItemId, setSelectedItemId] = useState('');

  useEffect(() => {
    const classname = 'cars';
    const groups = 'groups';
    dispatch(indexItems({ classname }));
    dispatch(indexGroups({ groups }));
  }, [dispatch]);

  useEffect(() => {
    if (success && selectedItemId) {
      navigate(`/group/${selectedItemId}`);
    }
  }, [success, selectedItemId]);

  const submitForm = async (data) => {
    const { ItemId, groupId } = data;

   

    setSelectedItemId(groupId);

    dispatch(addToGroup({ ItemId, groupId }))
      .unwrap()
      .then(() => {
        toast.success('Added to group successfully');
      })
      .catch(() => {
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
            <div className="car_box_pic">Pic</div>
            <div className="info_box">
             
              <select name="ItemId" {...register('ItemId', { required: true })} disabled={success}>
                {success2 ? (
                  <>
                    <option value="" hidden>Select a car</option>
                    {items.map((car) => (
                      <option key={car.id} value={car.id}>
                        {car.name}
                        ,
                        {car.id}
                      </option>
                    ))}
                  </>
                ) : (
                  <option value="">No cars available</option>
                )}
              </select>
              <select name="group_id" {...register('group_id', { required: true })} disabled={success}>
                {successg ? (
                  <>
                    <option value="" hidden>Select a group</option>
                    {groups.map((group) => (
                      <option key={group.id} value={group.id}>
                        {group.name}
                        ,
                        {group.id}
                      </option>
                    ))}
                  </>
                ) : (
                  <option value="">No groups available</option>
                )}
              </select>
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

export default AddToGroup;
