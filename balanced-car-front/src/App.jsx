import './styling/App.scss';
import './styling/AddCar.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AddCar from './components/AddComponents/AddCar';
import Main from './components/Main';
import Carinfo from './components/InfoComponents/Carinfo';
import Splash from './components/SignComps/Splash';
import SignUp from './components/SignComps/signup';
import SigninScreen from './components/SignComps/signin';
import Profile from './components/SignComps/Profile';
import EditProfile from './components/EditComponents/editprofile';
import DriverInfo from './components/InfoComponents/DriverInfo';
import 'react-toastify/dist/ReactToastify.css';
import AddBill from './components/AddComponents/AddBill';
import AddRevenue from './components/AddComponents/AddRevenue';
import AddDriver from './components/AddComponents/AddDriver';
import RevenueInfo from './components/InfoComponents/RevenueInfo';
import BillInfo from './components/InfoComponents/BillInfo';
import BillIndex from './components/IndexComponents/BillIndex';
import BillCarIndex from './components/IndexComponents/BillCarIndex';
import RevenueIndex from './components/IndexComponents/RevenueIndex';
import RevenueCarIndex from './components/IndexComponents/RevenueCarIndex';
import EditBill from './components/EditComponents/EditBill';
import GroupIndex from './components/IndexComponents/GroupIndex';
import GroupDriverShow from './components/InfoComponents/GroupDriverShow';
import GroupCarShow from './components/InfoComponents/GroupCarShow';
import AddGroup from './components/AddComponents/AddGroup';
import DriverIndex from './components/IndexComponents/DriverIndex';
import EditCar from './components/EditComponents/EditCar';
import AddToGroup from './components/AddComponents/AddToGroup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SigninScreen />} />
        <Route exact path="/" element={<Main />} />
        <Route path="/groups" element={<GroupIndex />} />
        <Route path="/group/cars/:gid" element={<GroupCarShow />} />
        <Route path="/group/drivers/:gid" element={<GroupDriverShow />} />
        <Route path="/Bills" element={<BillIndex />} />
        <Route path="/Bills/:cid" element={<BillCarIndex />} />
        <Route path="/Revenues" element={<RevenueIndex />} />
        <Route path="/Revenues/:cid" element={<RevenueCarIndex />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addcar" element={<AddCar />} />
        <Route path="/addbill" element={<AddBill />} />
        <Route path="/addgroup" element={<AddGroup />} />
        <Route path="/addrevenue" element={<AddRevenue />} />
        <Route path="/addDriver" element={<AddDriver />} />
        <Route path="/splash" element={<Splash />} />
        <Route path="/Drivers" element={<DriverIndex />} />
        <Route path="/carinfo/:cid" element={<Carinfo />} />
        <Route path="/driverinfo/:cid" element={<DriverInfo />} />
        <Route path="/revenueinfo/:cid" element={<RevenueInfo />} />
        <Route path="/billinfo/:cid" element={<BillInfo />} />
        <Route path="/main" element={<Main />} />
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="/editbill/:cid" element={<EditBill />} />
        <Route path="/editcar/:cid" element={<EditCar />} />
        <Route path="/addtoGroup" element={<AddToGroup />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
