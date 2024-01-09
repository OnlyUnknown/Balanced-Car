import './styling/App.scss';
// import Navigation from './Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddCar from './components/AddCar';
import Main from './components/main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="addcar" element={<AddCar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
