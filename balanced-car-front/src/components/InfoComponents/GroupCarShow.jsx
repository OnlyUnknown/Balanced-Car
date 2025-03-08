import '../../styling/main.scss';
import GroupCarComp from '../CompsComponents/GroupCarComp';
import RemoveGComp from '../CompsComponents/RemoveGComp';
import Navigation from '../Navigation';
import { useParams } from 'react-router-dom';

const GroupCarShow = () => {
  const { gid } = useParams();

  return (
    <>
      <Navigation />
      <div className="main_box">
        <GroupCarComp />
      </div>
      <RemoveGComp cid={gid} page={"groups"} />
    </>
  );
};

export default GroupCarShow;
