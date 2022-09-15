
import './App.css';
import HeroComponent from './components/hero-component';
import MainComponent from './components/main-component';
import NavComponent from './components/nav-component';

function App() {
  return (
    <div className="App">
      <NavComponent />
      <HeroComponent />
      <MainComponent />
    </div>
  );
}

export default App;
