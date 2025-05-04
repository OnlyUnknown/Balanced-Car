import '../../styling/CarComp.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { indexGroupItems } from '../../features/show/showActions';
import Spinner from '../Spinner';

const GroupCarComp = () => {
  const { groupItems, loading, success } = useSelector((state) => state.show);
  const dispatch = useDispatch();
  const { gid } = useParams();

  useEffect(() => {
    const classname = 'group';
    const id = gid;
    dispatch(indexGroupItems({ classname, id }));
  }, [dispatch, gid]);

  return (
    <>
      {success === true && groupItems.length > 0? (
        <div className="main-box">
          {groupItems?.map((app) => (
            <a href={`groupcarinfo/${app.id}`} className="box">
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
        loading === true ? (
          <Spinner />
        ) : (
          <div>empty</div>
        )
      )}
    </>
  );
};

export default GroupCarComp;
