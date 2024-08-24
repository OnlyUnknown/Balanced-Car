import { showIndex } from '../features/show/showActions';
import '../styling/CarComp.scss';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Error from './Error';
import Spinner from './Spinner';

const CarComp = () => {


  const { item, loading, success } = useSelector((state) => state.show);
  const dispatch = useDispatch();
  let { cid } = useParams();

  useEffect(() => {
    const id = cid;
    dispatch(showIndex({ classname, id }));
  }, [dispatch, cid]);
  return (
    <>
  <div className="box">
    <div className="pic">Pic</div>
    <div className="info">
      <div>Oil change: 0000</div>
      <div>TX Oil change: 0000</div>
      <div>Tire age: 00</div>
      <div>Model: 0000</div>
      <button type="button">Remove</button>
    </div>
  </div>
  </>
  )
};

export default CarComp;
