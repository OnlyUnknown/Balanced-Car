import '../../styling/CarComp.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { indexItemsOfItem } from '../../features/show/showActions';
import Spinner from '../Spinner';

const RevenueComp = ({ cid }) => {
  const { items, loading, success } = useSelector((state) => state.show);
  const dispatch = useDispatch();

  useEffect(() => {
    const classname = 'revenues';
    dispatch(indexItemsOfItem({ classname, id: cid }));
  }, [dispatch, cid]);

  return (
    <>
      {success === true ? (
        <div className="main-box">
          {items.map((app) => (
            <div className="box" key={app.id}>
              <div className="pic">Pic</div>
              <div className="info">
                <div>
                  id:
                  {app.id}
                </div>
                <div>
                  Total:
                  {app.total}
                </div>
                <div>
                  date:
                  {app.date}
                </div>
                <div>
                  Note:
                  {app.car_id}
                </div>
                <button type="button">Remove</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        loading === true ? (
          <Spinner />
        ) : (
          <div>empty</div>
        )
      )}
    </>
  );
};

RevenueComp.propTypes = {
  cid: PropTypes.string.isRequired, // Assuming cid is a number
};

export default RevenueComp;
