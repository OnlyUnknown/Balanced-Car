import '../../styling/CarComp.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { indexGroupItems } from '../../features/show/showActions';
import Spinner from '../Spinner';

const GroupCarComp = () => {
  const { groupItems, loadingg, successg } = useSelector((state) => state.showg);
  const dispatch = useDispatch();
  const { gid } = useParams();

  useEffect(() => {
    const classname = 'group';
    const id = gid;
    dispatch(indexGroupItems({ classname, id }));
  }, [dispatch, gid]);

  return (
    <>
      {loadingg === true ? (
        <Spinner />
      ) : successg === true && groupItems && groupItems.length > 0 ? (
        <div className="main-box">
          {groupItems?.map((app) => (
            <a href={`cars/groupcarinfo/${app.id}`} className="box" key={app.id}>
              <div className="pic">Pic</div>
              <div className="info">
                {app.classname === 'bills' ? (
                  <>
                    <div>
                      Bill Amount:
                      {app.amount}
                    </div>
                    <div>
                      Due Date:
                      {app.due_date}
                    </div>
                  </>
                ) : app.classname === 'drivers' ? (
                  <>
                    <div>
                      Driver Name:
                      {app.name}
                    </div>
                    <div>
                      License Number:
                      {app.license_number}
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      Oil change:
                      {app.name}
                    </div>
                    <div>
                      Name:
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
                  </>
                )}
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

export default GroupCarComp;
