import { showIndex } from '../features/show/showActions';
import '../styling/CarComp.scss';

const CarComp = () => {


  const { item, loading, success } = useSelector((state) => state.show);
  const dispatch = useDispatch();
  let { cid } = useParams();

  useEffect(() => {
    const id = cid;
    dispatch(showIndex({ classname, id }));
  }, [dispatch, cid]);
  return (
    <>
  <div className="box">
    <div className="pic">Pic</div>
    <div className="info">
      <div>Oil change: 0000</div>
      <div>TX Oil change: 0000</div>
      <div>Tire age: 00</div>
      <div>Model: 0000</div>
      <button type="button">Remove</button>
    </div>
  </div>
  </>
  )
};

export default CarComp;
