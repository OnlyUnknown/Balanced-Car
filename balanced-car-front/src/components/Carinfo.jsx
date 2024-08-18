import '../styling/Carinfo.scss';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate,  useParams } from 'react-router-dom';
import { toast } from 'react-toastify'; // Assuming you're using react-toastify for notifications
import { showItem } from '../features/show/showActions';
import Navigation from './Nav';
import Error from './Error';
import Spinner from './Spinner';
/* eslint-disable */

const Carinfo = () => {
  const { item, loading, success } = useSelector((state) => state.show);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { cid } = useParams();

// async ( classname = "car", id = cid) => {
//     try {
//       dispatch(showItem({ classname, id }));
//       toast.success('Success');
      
//     } catch (err) {
//       toast.error('Failed to add car. Please try again.');
//     }
//   };

  useEffect((classname = "car", id = cid) => {
  dispatch(showItem({classname, id}));
  }, [dispatch]);

  // const submitForm = async (item, classname, car_id) => {
  //   try {
  //       car_id = item.car_id
  //     classname = "driver",
  //     dispatch(showItem({ item, classname, car_id }));
  //   } catch (err) {
  //     toast.error('Failed to add car. Please try again.');
  //   }
  // };

 return (<>
    <Navigation />
    <div className="border">
    <li>
          {success == true ? (
            <div>
              {item.id}
            </div>
          ) : (
            <div>
              empty
            </div>
          )}
        </li>
      <div></div>
      <div className="carpic">Car pic</div>
      <div className="carinfo">information</div>
    </div>
  </>
 )
};

export default Carinfo;
