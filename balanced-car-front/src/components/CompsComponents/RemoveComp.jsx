import '../../styling/CarComp.scss';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { removeItem } from '../../features/remove/removeActions';

const RemoveComp = ({resource, cid}) => {
  const dispatch = useDispatch();


  return (
    <>
    {console.log(resource)}
      <button onClick={() => dispatch(removeItem({ id: cid, classname: resource }))}>
        Remove
      </button>
    </>
  );
};

export default RemoveComp;
