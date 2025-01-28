import '../../styling/main.scss';
import GroupComp from '../CompsComponents/GroupComp';
import Navigation from '../Navigation';

const GroupShow = () => (
  <>
    <Navigation />
    <div className="main_box">
      <GroupComp />
    </div>
  </>
);

export default GroupShow;
