import '../styling/main.scss';
import BillComp from './BillCarComp';
import Navigation from './Nav';
import { useParams } from 'react-router-dom';
  

const BillCarIndex = () => {
    let { cid } = useParams();
 return (<>
    <Navigation />
    <div className="main_box">
      <BillComp cid={cid} />
    </div>
  </>
)};

export default BillCarIndex;
