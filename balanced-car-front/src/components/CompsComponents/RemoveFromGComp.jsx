import '../../styling/CarComp.scss';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { removeFromGroup } from '../../features/remove/removeActions';
import Spinner from '../Spinner';

const RemoveFromGComp = ({
  cid, page, GroupId, resource,
}) => {
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
        onClick={() => dispatch(removeFromGroup({
          item_type: resource,
          GroupId,
          item_id: cid,
        }))}
        disabled={removeLoading}
      >
        {removeLoading ? <Spinner /> : 'remove'}
      </button>
    </>
  );
};

RemoveFromGComp.propTypes = {
  cid: PropTypes.number.isRequired,
  page: PropTypes.string.isRequired,
  GroupId: PropTypes.number.isRequired,
  resource: PropTypes.string.isRequired,
};

export default RemoveFromGComp;
