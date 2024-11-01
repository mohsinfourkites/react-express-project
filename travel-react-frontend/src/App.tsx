import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/Home/HomePage';
import PackagesPage from './pages/Package/Packages';
import LoginPage from './pages/LoginSignUp/Login/Login';
import SignupPage from './pages/LoginSignUp/SignUp/SignupPage';
import BookingPage from './pages/Booking/BookingPage';
import MultiLevelNavbar from './components/MultiLevelNavbar/MultiLevelNavbar';



const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <MultiLevelNavbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/book/:id" element={<BookingPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
