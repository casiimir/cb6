import './App.scss';
import About from './components/about';
import Button from './components/button';
import Hero from './components/hero';
import Menu from './components/menu';

function App() {
  return (
    <div className="App">
        <Menu />
        <Hero />
        <About />
    </div>
  )
}

export default App;
