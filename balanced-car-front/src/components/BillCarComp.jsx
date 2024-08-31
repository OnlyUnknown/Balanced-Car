import '../styling/CarComp.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { indexItemsOfItem } from '../features/show/showActions';
import Spinner from './Spinner';




const BillComp = (props) => {
  const { items, loading, success } = useSelector((state) => state.show);
  const dispatch = useDispatch();

  

  useEffect(() => {
    const classname = 'bills';
    const id = props.cid
    dispatch(indexItemsOfItem({ classname, id}));
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
                  id:
                  {app.id}
                </div>
                <div>
                  Total:
                  {app.total}
                </div>
                <div>
                  date:
                  {app.date}
                </div>
                <div>
                  Note:
                {app.note}
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
