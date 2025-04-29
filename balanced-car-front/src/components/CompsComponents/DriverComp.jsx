import '../../styling/CarComp.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { indexItems } from '../../features/show/showActions';
import Spinner from '../Spinner';

const DriverComp = () => {
  const { drivers, loading, success } = useSelector((state) => state.showD);
  const dispatch = useDispatch();

  useEffect(() => {
    const classname = 'drivers';
    dispatch(indexItems({ classname }));
  }, [dispatch]);

  return (
    <>
      {success === true ? (
        <div className="main-box">
          {drivers?.map((app) => (
            <a href={`/driverinfo/${app.id}`} className="box">
              <div className="pic">Pic</div>
              <div className="info">
                <div>
                  Name:
                  {app.name}
                </div>
                <div>
                  Nationality:
                  {app.nationality}
                </div>
                <div>
                  Identity:
                  {app.identification}
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

export default DriverComp;
