import '../styling/CarComp.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { showItem } from '../../features/show/showActions';
import Spinner from '../Spinner';

const GroupComp = () => {
  const { item, loading, success } = useSelector((state) => state.show);
  const dispatch = useDispatch();
  const { gid } = useParams();

  useEffect(() => {
    const classname = 'group';
    const id = gid;
    dispatch(showItem({ classname, id }));
  }, [dispatch, gid]);

  return (
    <>
      {success === true ? (
        <div className="main-box">
          {item.map((app) => (
            <div className="box">
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

export default GroupComp;
