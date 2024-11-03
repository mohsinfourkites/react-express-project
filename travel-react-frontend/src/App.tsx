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
import TopPlaces from './pages/TopPlaces/TopPlaces';
import NextUINavbar from './components/NextUI/NavBar/NextUINavbar';
import { BentoGrid } from './components/AceternityUI/BentoGrid/Abento-grid';
import { BentoGridDemo } from './components/AceternityUI/BentoGrid/ABentoImageGrid';
import { BentoGridThirdDemo } from './components/AceternityUI/BentoGrid/BentoGridThirdDemo';
import { BackgroundBeamsDemo } from './components/AceternityUI/BackgroundBeams/ABackgroundBeams';
import { CardSpotlightDemo } from './components/AceternityUI/CardSpotlight/CardSpotlight';
import { TracingBeamDemo } from './components/AceternityUI/TracingBeam/TracingBeam';
import ProgressSlider from './components/EldoraUI/ProgressSlider/ProgressSlider';
import { ProgressSliderPage } from './components/EldoraUI/ProgressSlider/progress-slider';



const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <MultiLevelNavbar />
        {/* <NextUINavbar /> */}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/book/:id" element={<BookingPage />} />
          <Route path="/topplaces" element={<TopPlaces />} />
          <Route path='/pricing' element={<ProgressSliderPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
