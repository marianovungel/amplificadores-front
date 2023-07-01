import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Screens/Home/Home';
import Inversor from './Screens/Inversor/Inversor';
import Ninversor from './Screens/Ninversor/Ninversor';
import Cc from './Screens/Cc/Cc';
import Ca from './Screens/Ca/Ca';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes> 
            <Route path="/" element={<Home /> } exact />
            <Route path="/inversor" element={ <Inversor /> } exact />
            <Route path="/ninversor" element={ <Ninversor /> } exact />
            <Route path="/cc" element={ <Cc /> } exact />
            <Route path="/ca" element={ <Ca /> } exact />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
