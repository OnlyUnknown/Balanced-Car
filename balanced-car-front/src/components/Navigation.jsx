import '../styling/main.scss';
import Headroom from 'react-headroom';
import Nav from './Nav';
import Navbarv2 from './Navbarv2';

const Navigation = () => (
  <>
    <Headroom>
      <div className="nav">
        <Navbarv2 />
      </div>
    </Headroom>
  </>
);

export default Navigation;
