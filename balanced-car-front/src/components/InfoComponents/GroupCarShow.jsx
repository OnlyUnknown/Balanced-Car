import '../../styling/main.scss';
import GroupCarComp from '../CompsComponents/GroupCarComp';
import Navigation from '../Navigation';

const GroupShow = () => (
  <>
    <Navigation />
    <div className="main_box">
      <GroupCarComp />
    </div>
  </>
);

export default GroupShow;
