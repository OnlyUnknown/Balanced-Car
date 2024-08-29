import '../styling/main.scss';
import BillComp from './BillComp';
import Navigation from './Nav';

const Main = () => (
  <>
    <Navigation />
    <div className="main_box">
      <BillComp />
    </div>
  </>
);

export default Main;
