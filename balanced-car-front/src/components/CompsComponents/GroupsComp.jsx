import '../../styling/CarComp.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { indexItems } from '../../features/show/showActions';
import Spinner from '../Spinner';

const GroupsComp = () => {
  const { items, loading, success } = useSelector((state) => state.show);
  const dispatch = useDispatch();

  useEffect(() => {
    const classname = 'groups';
    dispatch(indexItems({ classname }));
  }, [dispatch]);
  return (
    <>
      {success === true ? (
        <div className="main-box">
          {items.map((app) => (
            <div className="box">
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

export default GroupsComp;
