import '../styling/main.scss';
import Headroom from 'react-headroom';
import CarComp from './CompsComponents/CarComp';
import Navigation from './Navigation';

const Main = () => (
  <>

    <Headroom>
      <div className="nav">
        <Navigation />
      </div>
    </Headroom>
    <div className="main_box">
      <CarComp />
    </div>
  </>
);

export default Main;
