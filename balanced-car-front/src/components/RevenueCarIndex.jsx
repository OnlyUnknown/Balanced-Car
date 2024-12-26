import '../styling/main.scss';
import { useParams } from 'react-router-dom';
import RevenueComp from './RevenueCarComp';
import Navigation from './Navigation';

const RevenueCarIndex = () => {
  const { cid } = useParams();
  return (
    <>
      <Navigation />
      <div className="main_box">
        <RevenueComp cid={cid} />
      </div>
    </>
  );
};

export default RevenueCarIndex;
