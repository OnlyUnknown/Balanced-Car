import '../../styling/Carinfo.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { showItem } from '../../features/show/showActions';
import RemoveComp from '../CompsComponents/RemoveComp';
import Navigation from '../Navigation';
import Spinner from '../Spinner';
import EditButton from '../EditComponents/EditButton';
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
            <a href={`/carinfo/${item.car_id}`}><div>The car: {item.car_id}</div></a>
            <div>date: {item.date}</div>
            <div>Note: {item.note}</div>
          </div>
          <EditButton onClick={() => {window.location.href = `/editbill/${item.id}`}}/>
          <RemoveComp resource={"bill"} cid={item.id} page={"bills/"+ item.car_id} />
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
