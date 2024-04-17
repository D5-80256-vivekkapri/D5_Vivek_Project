import './App.css';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import StatusComponent from './pages/StatusComponent';
import TabularComponent from './pages/TabularComponent';
import WeatherComponent from './pages/WeatherComponent';
import SampleDataGenerator from './pages/SampleDataGenerator';
import Header from './components/Header';

function App() {

 

  return (

    <Router>
    <div className="App">
      <Header/>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route exact path="/" element={<StatusComponent/>}/>
          <Route path="/sample-data" element={<SampleDataGenerator/>} />
          <Route path="/weather" element={<WeatherComponent/>} />
        </Routes>
      </div>
    </div>
  </Router>
    
       
  );
}

export default App;
