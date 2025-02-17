import '../../styling/CarComp.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../../features/remove/removeActions';

const RemoveComp = ({resource, cid}) => {
  const dispatch = useDispatch();

  useEffect((res) => {
    res = resource
    const id = cid
    dispatch(removeItem({ id, res }));
  }, []);

  return (
    <>
      <button onClick={() => dispatch(removeItem({ id: cid, resouce: "Car" }))}>
        Remove
      </button>
    </>
  );
};

export default RemoveComp;
