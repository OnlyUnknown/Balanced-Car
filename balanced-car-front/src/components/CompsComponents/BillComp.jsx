import '../../styling/CarComp.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { indexItems } from '../../features/show/showActions';
import Spinner from '../Spinner';

const BillComp = () => {
  const { items, loading, success } = useSelector((state) => state.show);
  const dispatch = useDispatch();

  useEffect(() => {
    const classname = 'bills';
    dispatch(indexItems({ classname }));
  }, [dispatch]);

  return (
    <>
      {success === true ? (
        <div className="main-box">
          {items?.map((app) => (
            <div className="box">
              <div className="pic">Pic</div>
              <div className="info">
                <div>
                  Oil change:
                  {app.total}
                </div>
                <div>
                  name:
                  {app.id}
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

export default BillComp;
