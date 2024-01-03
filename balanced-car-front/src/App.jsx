import './styling/App.scss';
// import Navigation from './Nav';
import Navigation from './components/Nav';
import AddCar from './components/AddCar';

function App() {
  return (
    <div>
      <header className="App">
        <Navigation />
        <AddCar />
      </header>
    </div>
  );
}

export default App;
