import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import PackagesPage from './pages/Package/Packages';
import LoginPage from './pages/LoginSignUp/Login/Login';
import SignupPage from './pages/LoginSignUp/SignUp/SignupPage';
import BookingPage from './pages/Booking/BookingPage';
import MultiLevelNavbar from './components/MultiLevelNavbar/MultiLevelNavbar';
import TopPlaces from './pages/TopPlaces/TopPlaces';
import Pricing from './pages/Pricing';
// import HomePage from './pages/Home/HomePage';
import LoginSignupCombied from './pages/LoginSignUp/LoginSignupCombied/LoginSignupCombied';
import HomePage from './pages/Home/Homepage';




const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <MultiLevelNavbar />
        {/* <NextUINavbar /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/login" element={<LoginSignupCombied />} />
          <Route path="/signup" element={<LoginSignupCombied />} />
          <Route path="/book/:id" element={<BookingPage />} />
          <Route path="/topplaces" element={<TopPlaces />} />
          <Route path='/pricing' element={< Pricing />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
