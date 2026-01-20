import '../../styling/CarComp.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { indexGroups } from '../../features/show/showActions';
import Spinner from '../Spinner';

const GroupsComp = () => {
  const { groups, loadingg, successg } = useSelector((state) => state.showg);
  const dispatch = useDispatch();

  useEffect(() => {
    const groups = 'groups';
    dispatch(indexGroups({ groups }));
  }, [dispatch]);
  return (
    <>
      {successg === true  && groups.length > 0 ? (
        <div className="main-box">
          {groups?.map((app) => (
            <a href={`/group/${app.id}/`} className="box">
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
        loadingg === true ? (
          <Spinner />
        ) : (
          <div>empty</div>
        )
      )}
    </>
  );
};

export default GroupsComp;
