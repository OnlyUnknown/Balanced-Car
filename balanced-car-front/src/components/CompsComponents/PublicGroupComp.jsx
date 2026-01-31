import '../../styling/CarComp.scss';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showItem } from '../../features/show/showActions';
import Spinner from '../Spinner';

const PublicGroupComp = ({ id }) => {
  const { item, loading, success } = useSelector((state) => state.show);
  const dispatch = useDispatch();

  useEffect(() => {
    const classname = 'public_group';
    dispatch(showItem({ classname, id }));
  }, [dispatch, id]);

  return (
    <>
      {loading === true ? (
        <Spinner />
      ) : success === true && item && item.length > 0 ? (
        <div className="main-box">
          {item?.map((app) => (
            <a href={`/public_car/${app.id}`} className="box">
              <div className="pic">Pic</div>
              <div className="info">
                <div>
                  Oil change:
                  {app.name}
                </div>
                <div>
                  name:
                  {app.car_type}
                </div>
                <div>
                  Tire age:
                  {app.description}
                </div>
                <div>
                  Model:
                  {app.public}
                </div>
                <button type="button">Remove</button>
              </div>
            </a>

          ))}
        </div>
      ) : (
        <div>empty</div>
      )}
    </>
  );
};
PublicGroupComp.propTypes = {
  id: PropTypes.string.isRequired,
};

export default PublicGroupComp;
