import '../styling/main.scss';
import CarComp from './CarComp';
import Navigation from './Nav';

const Main = () => (
  <>
    <Navigation />
    <div className="main_box">
      <CarComp />
      <CarComp />
      <CarComp />
      <CarComp />
      <CarComp />
      <CarComp />
      <CarComp />
      <CarComp />
    </div>
  </>
);

export default Main;
