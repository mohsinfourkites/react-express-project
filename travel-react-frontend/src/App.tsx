import React from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Navigate 
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

// Clerk Imports
import { 
  SignedIn, 
  SignedOut, 
} from '@clerk/clerk-react';



// Page Imports
import PackagesPage from './pages/Package/Packages';
import BookingPage from './pages/Booking/BookingPage';
import MultiLevelNavbar from './components/MultiLevelNavbar/MultiLevelNavbar';
import TopPlaces from './pages/TopPlaces/TopPlaces';
import Pricing from './pages/Pricing';
import HomePage from './pages/Home/Homepage';
import SignInPageClerk from './pages/SignInSignUp/SignIn/SignInPageClerk';
import SignUpPageClerk from './pages/SignInSignUp/SignUp/SignupPageClerk';
import WeatherWidgetAccU from './components/Weather/MyCard/WeatherWidget';

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <Navigate to="/sign-in" replace />
      </SignedOut>
    </>
  );
};

const App: React.FC = () => {
  
  return (
   
      <Provider store={store}>
        <Router>
          <MultiLevelNavbar />
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/support" element={<WeatherWidgetAccU />} />
            
            {/* AUthenciated  Routes */}
             <Route path="/sign-in" element={<SignInPageClerk />} />
            <Route path="/sign-up" element={<SignUpPageClerk />} />
            
            {/* Protected Routes */}
            <Route 
              path="/book/:id" 
              element={
                <ProtectedRoute>
                  <BookingPage />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/topplaces" 
              element={
                <ProtectedRoute>
                  <TopPlaces />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/pricing" 
              element={
                <ProtectedRoute>
                  <Pricing />
                </ProtectedRoute>
              } 
            />
              
            {/* 404 Route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </Provider>
    
  );
};

export default App;