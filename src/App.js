import NavComponent from './components/nav-component';
import HeroComponent from './components/hero-component';
import MainComponent from './components/main-component';
import FooterComponent from './components/footer-component';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavComponent />
      <HeroComponent />
      <MainComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
