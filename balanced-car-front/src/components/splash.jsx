import { Link } from 'react-router-dom'
import '../styling/splash.scss';

const Splash = () => (
  <div className="splash">
    <h1 className="title-sp">Balanced car</h1>
    <Link to={`/signin`} className="signin">Sign In</Link>
    <Link to={`/signup`} className="signup">Sign Up</Link>
  </div>
);

export default Splash;
