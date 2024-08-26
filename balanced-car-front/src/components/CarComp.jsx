import { indexItems } from '../features/show/showActions';
import '../styling/CarComp.scss';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Error from './Error';
import Spinner from './Spinner';
import Navigation from './Nav';

const CarComp = () => {


  const { items, loading, success } = useSelector((state) => state.show);
  const dispatch = useDispatch();

  useEffect(() => {
    const classname = "cars"
    dispatch(indexItems({ classname }));
  }, [dispatch]);

  return (
    <>
      {success === true ? (
        <div>
        {items.map((app) => (
          <div className="box">
          <div className="pic">Pic</div>
          <div className="info">
            <div>Oil change: {app.oil_milage}</div>
            <div>TX Oil change: </div>
            <div>Tire age: 00</div>
            <div>Model: 0000</div>
            <button type="button">Remove</button>
          </div>
        </div>
        

        ))}
        </div>
      ) : (
        loading === true ? (
          <Spinner/>
        ) : (
          <div>empty</div>
        )
      )}

      
  {/*  */}
  </>
  )
};

export default CarComp;
