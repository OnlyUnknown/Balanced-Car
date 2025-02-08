import '../../styling/main.scss';
import { useParams } from 'react-router-dom';
import PublicGroupsComp from '../CompsComponents/PublicGroupComp';
import Navigation from '../Navigation';

const PublicGroupsIndex = () => {
      const { id } = useParams();
      return (
  <>
  {console.log(id)}
    <Navigation />
    <div className="main_box">
      <PublicGroupsComp id={id} />
    </div>
  </>
)
};

export default PublicGroupsIndex;
