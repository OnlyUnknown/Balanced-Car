import '../styling/main.scss';
import Headroom from 'react-headroom';
import DriverComp from '../CompsComponents/DriverComp';
import Navigation from '../Navigation';

const Main = () => (
  <>

    <Headroom>
      <div className="nav">
        <Navigation />
      </div>
    </Headroom>
    <div className="main_box">
      <DriverComp />
    </div>
  </>
);

export default Main;
