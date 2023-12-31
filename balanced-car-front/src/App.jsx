import './styling/App.scss';
// import Navigation from './Nav';
import Navigation from './components/Nav';
import Carinfo from './components/Carinfo';

function App() {
  return (
    <div>
      <header className="App">
        <Navigation />
        <Carinfo />
      </header>
    </div>
  );
}

export default App;
