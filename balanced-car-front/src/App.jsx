import './styling/App.scss';
import './styling/AddCar.scss';

// import Navigation from './Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddCar from './components/AddCar';
import Main from './components/main';
import Carinfo from './components/Carinfo';
import Splash from './components/splash';
import Signup from './components/signup';
import Signin from './components/signin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/addcar" element={<AddCar />} />
        <Route path="/splash" element={<Splash />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/carinfo" element={<Carinfo />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
