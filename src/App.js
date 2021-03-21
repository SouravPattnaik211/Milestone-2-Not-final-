import './App.css';
import Head from '../src/fronts/Head.js'
import Bodysec from './fronts/Bodysec.js'
import Bodybuttons from './fronts/Bodybuttons.js';
import Footer from './components/Footer.js'

function App() {
  return (
    <div className="App">
      <Head />
      <Bodysec />
      <Bodybuttons />
      <Footer />
    </div>
  );
}

export default App;
