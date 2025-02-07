import '../../styling/CarComp.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { showItem } from '../../features/show/showActions';
import Spinner from '../Spinner';

const PublicGroupsComp = ({ cid }) => {
  const { items, loading, success } = useSelector((state) => state.show);
  const dispatch = useDispatch();

  useEffect(() => {
    const classname = "public_groups";
    dispatch(showItem({ classname, id: cid }));
  }, [dispatch, cid]);
  return (
    <>
      {success === true ? (
        <div className="main-box">
          {console.log(items)}
          {items?.map((app) => (
            <a href={`/group/${app.group_type}/${app.id}`} className="box">
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
  cid: PropTypes.string.isRequired, // Assuming cid is a number
};

export default PublicGroupsComp;
