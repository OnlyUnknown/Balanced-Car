import '../../styling/CarComp.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../../features/remove/removeActions';

const removeComp = ({resource, cid}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    resource = rparams;
    id = cid
    dispatch(removeItem({ id }));
  }, [dispatch]);

  return (
    <>
      <button onClick={() => dispatch(removeItem({ id: cid, resource }))}>
        Remove
      </button>
    </>
  );
};

export default removeComp;
