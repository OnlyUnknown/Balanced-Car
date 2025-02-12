import '../../styling/main.scss';
import GroupDriverComp from '../CompsComponents/GroupDriverComp';
import Navigation from '../Navigation';

const GroupDriverShow = () => (
  <>
    <Navigation />
    <div className="main_box">
      <GroupDriverComp />
    </div>
  </>
);

export default GroupDriverShow;
