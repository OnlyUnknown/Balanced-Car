import '../styling/main.scss';
import CarComp from './CarComp';
import Navigation from './Nav';

const Main = () => (
  <>
    <Navigation />
    <div className="main_box">
      <CarComp />
    </div>
  </>
);

export default Main;
