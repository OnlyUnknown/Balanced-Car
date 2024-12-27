import '../styling/main.scss';
import RevenueComp from './RevenueComp';
import Navigation from './Navigation';

const RevenueIndex = () => (
  <>
    <Navigation />
    <div className="main_box">
      <RevenueComp />
    </div>
  </>
);

export default RevenueIndex;
