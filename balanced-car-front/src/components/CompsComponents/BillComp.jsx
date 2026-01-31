import '../../styling/CarComp.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { indexItems } from '../../features/show/showActions';
import Spinner from '../Spinner';

const BillComp = () => {
  const { items, loading, success } = useSelector((state) => state.shows);
  const dispatch = useDispatch();

  useEffect(() => {
    const classname = 'bills';
    dispatch(indexItems({ classname }));
  }, [dispatch]);

  return (
    <>
      {loading === true ? (
        <Spinner />
      ) : success === true && items && items.length > 0 ? (
        <div className="main-box">
          {items?.map((app) => (
            <a href={`/billinfo/${app.id}`} className="box">
              <div className="pic">Pic</div>
              <div className="info">
                <div>
                  Total:
                  {app.total}
                </div>
                <div>
                  Id:
                  {app.id}
                </div>
                <div>
                  date:
                  {app.date}
                </div>
                <div>
                  Model:

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

export default BillComp;
