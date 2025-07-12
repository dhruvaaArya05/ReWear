import { Routes, Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage.jsx';
import SignupPage from './Components/SignupPage.jsx';
import LandingPage from './Components/LandingPage.jsx';
import HomePage from './Components/HomePage.jsx';
import AddItem from './Components/AddItem.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />}></Route>
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path='/add/item' element={<AddItem />} />
    </Routes>
  );
}

export default App;