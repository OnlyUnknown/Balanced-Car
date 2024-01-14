import '../styling/Carinfo.scss';
import Navigation from './Nav';

const Carinfo = () => (
  <>
    <Navigation />
    <div className="border">
      <div className="carpic">Car pic</div>
      <div className="carinfo">information</div>
    </div>
  </>
);

export default Carinfo;
