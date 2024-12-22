import '../styling/main.scss';
import CarComp from './CarComp';
import Nav from './Nav';
import Headroom from 'react-headroom';

const Navigation = () => (
  <>
    <Headroom>  
      <div className='nav'>
      <Nav />
      </div>
      </ Headroom >
  </>
);

export default Navigation;
