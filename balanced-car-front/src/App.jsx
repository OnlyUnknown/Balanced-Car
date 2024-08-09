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
import Profile from './components/profile.jsx';
import EditProfile from './components/editprofile';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SigninScreen />} />
        <Route exact path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addcar" element={<AddCar />} />
        <Route path="/splash" element={<Splash />} />
        <Route path="/carinfo" element={<Carinfo />} />
        <Route path="/main" element={<Main />} />
        <Route path="/editProfile" element={<EditProfile />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
