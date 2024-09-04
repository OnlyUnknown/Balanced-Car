import '../styling/CarComp.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { indexItems } from '../features/show/showActions';
import Spinner from './Spinner';

const RevenueComp = () => {
  const { items, loading, success } = useSelector((state) => state.show);
  const dispatch = useDispatch();

  useEffect(() => {
    const classname = 'revenues';
    dispatch(indexItems({ classname }));
  }, [dispatch]);

  return (
    <>
      {success === true ? (
        <div className="main-box">
          {items.map((app) => (
            <div className="box">
              <div className="pic">Pic</div>
              <div className="info">
                <div>
                  Total Revenue:
                  {app.total}
                </div>
                <div>
                  Date:
                  {app.date}
                </div>
                <div>
                  Tire age:

                </div>
                <div>
                  Model:

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

export default RevenueComp;
