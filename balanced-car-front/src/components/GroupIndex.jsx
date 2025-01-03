import '../styling/main.scss';
import GroupsComp from './GroupsComp';
import Navigation from './Navigation';

const BillIndex = () => (
  <>
    <Navigation />
    <div className="main_box">
      <GroupsComp />
    </div>
  </>
);

export default BillIndex;
