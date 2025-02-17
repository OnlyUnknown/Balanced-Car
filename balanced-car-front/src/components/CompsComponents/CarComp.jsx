import '../../styling/CarComp.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { indexItems } from '../../features/show/showActions';
import RemoveComp from './RemoveComp';
import Spinner from '../Spinner';

const CarComp = () => {
  const { items, loading, success } = useSelector((state) => state.show);
  const dispatch = useDispatch();

  useEffect(() => {
    const classname = 'cars';
    dispatch(indexItems({ classname }));
  }, [dispatch]);

  return (
    <>
      {success === true ? (
        <div className="main-box">
          {items?.map((app) => (
            <a href={`/carinfo/${app.id}`} className="box">
              <div className="pic">Pic</div>
              <div className="info">
                <div>
                  Oil change:
                  {app.oil_milage}
                </div>
                <div>
                  name:
                  {app.name}
                </div>
                <div>
                  Tire age:
                  {app.car_type}
                </div>
                <div>
                  Model:
                  {app.model}
                </div>
                <RemoveComp resource={"cars"} cid={app.id} />
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

export default CarComp;
