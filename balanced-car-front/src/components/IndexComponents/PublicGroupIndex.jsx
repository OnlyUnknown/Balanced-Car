import '../../styling/main.scss';
import { useParams } from 'react-router-dom';
import PublicGroupsComp from '../CompsComponents/PublicGroupComp';
import Navigation from '../Navigation';

const PublicGroupsIndex = () => {
      const { cid } = useParams();
      return (
  <>
    <Navigation />
    <div className="main_box">
      <PublicGroupsComp cid={cid} />
    </div>
  </>
)
};

export default PublicGroupsIndex;
