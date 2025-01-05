import './styling/App.scss';
import './styling/AddCar.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AddCar from './components/AddCar';
import Main from './components/Main';
import Carinfo from './components/Carinfo';
import Splash from './components/Splash';
import SignUp from './components/signup';
import SigninScreen from './components/signin';
import Profile from './components/Profile';
import EditProfile from './components/editprofile';
import DriverInfo from './components/DriverInfo';
import 'react-toastify/dist/ReactToastify.css';
import AddBill from './components/AddBill';
import AddRevenue from './components/AddRevenue';
import AddDriver from './components/AddDriver';
import RevenueInfo from './components/RevenueInfo';
import BillInfo from './components/BillInfo';
import BillIndex from './components/BillIndex';
import BillCarIndex from './components/BillCarIndex';
import RevenueIndex from './components/RevenueIndex';
import RevenueCarIndex from './components/RevenueCarIndex';
import EditBill from './components/EditBill';
import GroupIndex from './components/GroupIndex';
import GroupShow from './components/GroupShow';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SigninScreen />} />
        <Route exact path="/" element={<Main />} />
        <Route path="/groups" element={<GroupIndex />} />
        <Route path="/group/:gid" element={<GroupShow />} />
        <Route path="/Bills" element={<BillIndex />} />
        <Route path="/Bills/:cid" element={<BillCarIndex />} />
        <Route path="/Revenues" element={<RevenueIndex />} />
        <Route path="/Revenues/:cid" element={<RevenueCarIndex />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addcar" element={<AddCar />} />
        <Route path="/addbill" element={<AddBill />} />
        <Route path="/addrevenue" element={<AddRevenue />} />
        <Route path="/addDriver" element={<AddDriver />} />
        <Route path="/splash" element={<Splash />} />
        <Route path="/carinfo/:cid" element={<Carinfo />} />
        <Route path="/driverinfo/:cid" element={<DriverInfo />} />
        <Route path="/revenueinfo/:cid" element={<RevenueInfo />} />
        <Route path="/billinfo/:cid" element={<BillInfo />} />
        <Route path="/main" element={<Main />} />
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="/editbill/:cid" element={<EditBill />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
