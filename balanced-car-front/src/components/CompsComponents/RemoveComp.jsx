import '../../styling/CarComp.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { removeItem } from '../../features/remove/removeActions';
import Spinner from '../Spinner';

const RemoveComp = ({ resource, cid, page }) => {
  const { removeLoading, removeError, removeSuccess } = useSelector((state) => state.remove);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (removeError) {
      toast.error(removeError);
    }
  }, [removeError]);

  useEffect(() => {
    if (removeSuccess === true) {
      const Transfer = () => {
        navigate(`/${page}`);
      };
      setTimeout(Transfer, 1000); // Pass Transfer as a function reference, not by invoking it
    }
  }, [removeSuccess]);

  useEffect(() => {
    if (removeSuccess) { toast.success('Item deleted successfully'); }
  }, [removeSuccess]);

  return (
    <>
      <button
        type="button"
        onClick={() => dispatch(removeItem({
          id: cid,
          classname: resource,
        }))}
        disabled={removeLoading || removeSuccess}
      >
        {removeLoading ? <Spinner /> : 'remove'}
      </button>
    </>
  );
};

RemoveComp.propTypes = {
  cid: PropTypes.number.isRequired,
  page: PropTypes.string.isRequired,
  resource: PropTypes.string.isRequired,
};

export default RemoveComp;
