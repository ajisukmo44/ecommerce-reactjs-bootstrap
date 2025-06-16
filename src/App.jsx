import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';
import ProfilePage from './pages/ProfilePage';
import ProductPage from './pages/Productpage';
import Checkout from './pages/Checkout';
import LoginPage from './pages/LoginPage';
import HomeHeader from './components/HomeHeader';

function App() {  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/checkout/:id" element={<Checkout />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;