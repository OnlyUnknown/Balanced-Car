import '../../styling/main.scss';
import { useParams } from 'react-router-dom';
import PublicGroupComp from '../CompsComponents/PublicGroupComp';
import Navigation from '../Navigation';

const PublicGroupsIndex = () => {
      const { id } = useParams();
      return (
  <>
    <Navigation />
    <div className="main_box">
      <PublicGroupComp id={id} />
    </div>
  </>
)
};

export default PublicGroupsIndex;
