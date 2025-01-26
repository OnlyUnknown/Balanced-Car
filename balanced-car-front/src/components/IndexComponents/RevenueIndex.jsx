import '../styling/main.scss';
import RevenueComp from '../CompsComponents/RevenueComp';
import Navigation from '../Navigation';

const RevenueIndex = () => (
  <>
    <Navigation />
    <div className="main_box">
      <RevenueComp />
    </div>
  </>
);

export default RevenueIndex;
