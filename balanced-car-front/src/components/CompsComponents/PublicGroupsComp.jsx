import '../../styling/CarComp.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { showItem } from '../../features/show/showActions';
import Spinner from '../Spinner';

const PublicGroupsComp = ({ id }) => {
  const { item, loading, success } = useSelector((state) => state.show);
  const dispatch = useDispatch();

  useEffect(() => {
    const classname = 'public_groups';
    dispatch(showItem({ classname, id }));
  }, [dispatch, id]);
  return (
    <>
      {success === true ? (
        <div className="main-box">
          {item?.map((app) => (
            <a href={`/public_group/${app.id}`} className="box">
              <div className="info">
                <div>
                  name:
                  {app.name}
                </div>
                <div>
                  Type:
                  {app.group_type}
                </div>
                <div>
                  Location:
                  {app.location}
                </div>
                <button type="button">Remove</button>
              </div>
            </a>

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

PublicGroupsComp.propTypes = {
  id: PropTypes.string.isRequired, // Assuming cid is a number
};

export default PublicGroupsComp;
