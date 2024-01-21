import '../styling/main.scss';
import AddNew from './AddNew';
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
      <AddNew />
    </div>
  </>
);

export default Main;
