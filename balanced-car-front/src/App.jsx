import './styling/App.scss';
// import Navigation from './Nav';
import Navigation from './components/Nav';
import Main from './components/main';

function App() {
  return (
    <div>
      <header className="App">
        <Navigation />
        <Main />
      </header>
    </div>
  );
}

export default App;
