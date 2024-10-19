
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import ThankYouPageList from './Components/ThankYouPageList';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/thankyou" element={<ThankYouPageList/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;