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
          <a href={`/addcar`} className="box">

              <div className="info">

Add new

              </div>
            </a>
  </>
);

export default Main;
