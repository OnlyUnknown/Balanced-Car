import '../styling/main.scss';
import { useParams } from 'react-router-dom';
import BillComp from '../CompsComponents/BillCarComp';
import Navigation from '../Navigation';

const BillCarIndex = () => {
  const { cid } = useParams();
  return (
    <>
      <Navigation />
      <div className="main_box">
        <BillComp cid={cid} />
      </div>
    </>
  );
};

export default BillCarIndex;
