import '../styling/main.scss';
import RevenueComp from './RevenueComp';
import Navigation from './Nav';

const RevenueIndex = () => (
  <>
    <Navigation />
    <div className="main_box">
      <RevenueComp />
    </div>
  </>
);

export default RevenueIndex;
