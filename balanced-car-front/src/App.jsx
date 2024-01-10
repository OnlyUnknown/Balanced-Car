import './styling/App.scss';
// import Navigation from './Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddCar from './components/AddCar';
import Main from './components/main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Main}/>
          <Route path="/addcar" Component={AddCar} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
