import '../../styling/main.scss';
import GroupCarComp from '../CompsComponents/GroupCarComp';
import Navigation from '../Navigation';

const GroupCarShow = () => (
  <>
    <Navigation />
    <div className="main_box">
      <GroupCarComp />
    </div>
  </>
);

export default GroupCarShow;
