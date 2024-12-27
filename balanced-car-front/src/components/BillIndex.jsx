import '../styling/main.scss';
import BillComp from './BillComp';
import Navigation from './Navigation';

const BillIndex = () => (
  <>
    <Navigation />
    <div className="main_box">
      <BillComp />
    </div>
  </>
);

export default BillIndex;
