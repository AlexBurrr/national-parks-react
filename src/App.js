// import Img1 from './Images/yosemite-1.jpg'
import Pages from './Pages/Pages'
import Header from './Components/Header'
import { BrowserRouter as Router } from 'react-router-dom'


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Pages />
      </div>
    </Router>
  );
}

export default App;
