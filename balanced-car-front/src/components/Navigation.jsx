import '../styling/main.scss';
import Headroom from 'react-headroom';
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
