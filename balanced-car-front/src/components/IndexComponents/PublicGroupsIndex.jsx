import '../../styling/main.scss';
import { useParams } from 'react-router-dom';
import PublicGroupsComp from '../CompsComponents/PublicGroupsComp';
import Navigation from '../Navigation';

const PublicGroupsIndex = () => {
  const { id } = useParams();
  return (
    <>
      <Navigation />
      <div className="main_box">
        <PublicGroupsComp id={id} />
      </div>
    </>
  );
};

export default PublicGroupsIndex;
