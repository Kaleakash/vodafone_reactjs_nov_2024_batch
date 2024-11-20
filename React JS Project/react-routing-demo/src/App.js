import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Feedback from './Feedback';
import Login from './Login';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
        <h3>React Routing Example</h3>
        <Link to="/about_us">AboutUs</Link> |
        <Link to="/contact_us">ContactUs</Link> |
        <Link to="/feedback">FeedUs</Link> |
        <Link to="/login">Login</Link> |
      </div>
      <hr/>
      <Routes>
          <Route path='/about_us' element={<AboutUs></AboutUs>}></Route>
          <Route path='/contact_us' element={<ContactUs></ContactUs>}></Route>
          <Route path='/feedback' element={<Feedback></Feedback>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
