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
  const { loadingg, error } = useSelector((state) => state.showg);
  const {
    items, success: success2,
  } = useSelector((state) => state.shows);
    const {
     groups, successg,
  } = useSelector((state) => state.showg);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [selectedItemId, setSelectedItemId] = useState('');

  useEffect(() => {
    const classname = 'drivers';
    const groups = 'groups';
    dispatch(indexItems({ classname }));
    dispatch(indexGroups({ groups }));
  }, [dispatch]);

  useEffect(() => {
    if (success && selectedItemId) {
      const Transfer = () => {
        navigate('/main');
      };
      setTimeout(Transfer, 1000); // Pass Transfer as a function reference, not by invoking it
    }
  }, [success, selectedItemId]);

  const submitForm = async (data) => {
    const { ItemId, group_id, item_type } = data;

   

    setSelectedItemId(group_id);
    dispatch(addToGroup({ item_id: ItemId, group_id, item_type: "Car" }))
      .unwrap()
      .then(() => {
        toast.success('Added to group successfully');
      })
      .catch(() => {
        toast.error('Failed to add to the group. Please try again.');
      });
  };

  const [itemType, setItemType] = useState('car');

  const handleItemTypeChange = (e) => {
    const classname = e.target.value;
    setItemType(classname);
    dispatch(indexItems({ classname }));
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
              <select value={itemType} onChange={handleItemTypeChange} disabled={success}>
                <option value="driver">Drivers</option>
                <option value="car">Cars</option>
              </select>
              <select name="ItemId" {...register('ItemId', { required: true })} disabled={success}>
                {success2 ? (
                  <>
                    <option value="" hidden>Select an item</option>
                    {items.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                        ,
                        {item.id}
                      </option>
                    ))}
                  </>
                ) : (
                  <option value="">No items available</option>
                )}
              </select>
              <select name="group_id" {...register('group_id', { required: true })} disabled={success}>
                {successg ? (
                  <>
                    <option value="" hidden>Select a group</option>
                    {groups.filter((group) => group.group_type === itemType).map((group) => (
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
