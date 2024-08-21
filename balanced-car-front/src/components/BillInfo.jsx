import '../styling/Carinfo.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { showItem } from '../features/show/showActions';
import Navigation from './Nav';
import Spinner from './Spinner';
/* eslint-disable */


const BillInfo = () => {
  const { item, loading, success } = useSelector((state) => state.show);
  const dispatch = useDispatch();
  let { cid } = useParams();

  useEffect(() => {
    const classname = "bill";
    const id = cid;
    dispatch(showItem({ classname, id }));
  }, [dispatch, cid]);


  return (
    <>
      <Navigation />
      {success === true ? (
        <div className="border">
          <div className="carpic">Revenue pic</div>
          <div className="carinfo">
          <div>Id: {item.id}</div>
            <div>
              Total: {item.total}
            </div>
            <div>The car: <a href={`/carinfo/${item.car_id}`}>{item.car_id}</a></div>
            <div>date: {item.date}</div>
            <div>Note: {item.note}</div>
          </div>
        </div>
      ) : (
        loading === true ? (
          <Spinner/>
        ) : (
          <div>empty</div>
        )
      )}
    </>
  );
};

export default BillInfo;
