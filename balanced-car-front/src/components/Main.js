import '../styling/main.scss';
import CarComp from './CarComp';
import Navigation from './Nav';
import Headroom from 'react-headroom';

const Main = () => (
  <>
    
    <Headroom>  
      <div className='nav'>
      <Navigation />
      </div>
      </ Headroom >
    <div className="main_box">
      <CarComp />
    </div>
  </>
);

export default Main;
