import '../../styling/CarComp.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { showItem } from '../../features/show/showActions';
import Spinner from '../Spinner';

const GroupDriverComp = () => {
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
      {success === true && item.length > 0? (
        <div className="main-box">
          {item?.map((app) => (
            <a href={`/driverinfo/${app.id}`} className="box">
              <div className="pic">Pic</div>
              <div className="info">
                <div>
                  Name:
                  {app.name}
                </div>
                <div>
                  Natinality:
                  {app.nationality}
                </div>
                <div>
                  Phone Number:
                  {app.phone_number}
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

export default GroupDriverComp;
