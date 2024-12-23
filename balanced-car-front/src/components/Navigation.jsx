import '../styling/main.scss';
import Headroom from 'react-headroom';
import Nav from './Nav';

const Navigation = () => (
  <>
    <Headroom>
      <div className="nav">
        <Nav />
      </div>
    </Headroom>
  </>
);

export default Navigation;
