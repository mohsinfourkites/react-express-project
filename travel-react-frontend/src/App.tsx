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
  ClerkProvider, 
  SignedIn, 
  SignedOut, 
  SignIn, 
  SignUp 
} from '@clerk/clerk-react';

import { dark } from '@clerk/themes';

// Page Imports
import PackagesPage from './pages/Package/Packages';
import BookingPage from './pages/Booking/BookingPage';
import MultiLevelNavbar from './components/MultiLevelNavbar/MultiLevelNavbar';
import TopPlaces from './pages/TopPlaces/TopPlaces';
import Pricing from './pages/Pricing';
import HomePage from './pages/Home/Homepage';
import UserProfilePage from './pages/Profile/UserProfilePage'; // Create this component
import AuthContainer from './components/MyFigma/LoginSignupFigma/AuthContainer/AuthContainer';
import LoginPageClerk from './pages/SignInSignUp/SignIn/SignInPageClerk';
import SignInPageClerk from './pages/SignInSignUp/SignIn/SignInPageClerk';
import SignUpPageClerk from './pages/SignInSignUp/SignUp/SignupPageClerk';

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
  // Ensure Clerk publishable key is set
  // const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
  
  // if (!publishableKey) {
  //   throw new Error("Missing Publishable Key");
  // }

  return (
    // <ClerkProvider 
    //   publishableKey={publishableKey}
    //   appearance={{
    //     baseTheme: dark, // Use imported theme
    //     variables: {
    //       colorPrimary: '#0070F3',
    //     },
    //     elements: {
    //       formButtonPrimary: 'bg-blue-500 hover:bg-blue-600',
    //       card: 'shadow-lg rounded-xl'
    //     }
    //   }}
    // >
      <Provider store={store}>
        <Router>
          <MultiLevelNavbar />
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/packages" element={<PackagesPage />} />
            
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
            
            {/* <Route 
              path="/profile" 
              element={
                <ProtectedRoute>
                  <UserProfilePage />
                </ProtectedRoute>
              } 
            /> */}
            
            {/* 404 Route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </Provider>
    // </ClerkProvider>
  );
};

export default App;