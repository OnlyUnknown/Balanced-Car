import '../../styling/CarComp.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { removeItem } from '../../features/remove/removeActions';

const RemoveComp = ({resource, cid}) => {
  const { loading, errors, success } = useSelector((state) => state.remove);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (success === true) {
      const Transfer = () => {
        navigate(-1);
      };
      setTimeout(Transfer, 1000); // Pass Transfer as a function reference, not by invoking it
    }
  }, [success]);

    useEffect(() => {
      if (success)
        toast.success('Item delted successfully');
    }, [success]);

  return (
    <>
      <button onClick={() => dispatch(removeItem({ id: cid, classname: resource }))} disabled={loading || success}>
      {loading ? <Spinner /> : 'remove'}
      </button>
    </>
  );
};

export default RemoveComp;
