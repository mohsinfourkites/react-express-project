import React from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from "@clerk/clerk-react";

import Logo from "../../assets/leaf1.png";
import DesktopMenu from "./DesktopMenu/DesktopMenu";
import styles from './MultiLevelNavbar.module.scss';
import { Menus } from "../../utils/multi-level-meu";
import MobMenu from "./MobileMenu/Mobmenu";
import AuthContainer from "../MyFigma/LoginSignupFigma/AuthContainer/AuthContainer";
import { useUser } from "@clerk/clerk-react";

function UserName() {
  const { isSignedIn, user } = useUser();
  if(!isSignedIn) {
    return null;
  }
  return <div className="gap-x-1 lg:flex-center hidden">Hello, {user.firstName} {user.lastName}</div>
}

const MultiLevelNavbar: React.FC = () => {
  return (

    
    <header className={`${styles.navbar} ${styles.stickyNavbar}`}>
      <nav className="px-3.5 flex-center-between w-full max-w-8xl mx-auto">
        {/* Logo Section */}
        <div 
          className="flex-center gap-x-3 z-[999] relative"
          style={{ marginLeft: '25px' }}
        >
          <img src={Logo} alt="Logo" className="size-8" />
          <h3 className="text-lg font-semibold">Jannat-E-Kashmir</h3>
        </div>

        {/* Desktop Menu */}
        <ul className="gap-x-1 lg:flex-center hidden">
          {Menus.map((menu) => (
            <DesktopMenu menu={menu} key={menu.name} />
          ))}
        </ul>

        {/* Authentication and User Actions */}
        <div className="flex-center gap-x-5">
          {/* Show Sign In/Up buttons when user is not logged in */}
          <SignedOut>
            {/* <SignInButton>   */}

              <Link to="/sign-in">
              <button
                aria-label="sign-in"
                className="bg-white/5 z-[999] relative px-3 py-1.5 shadow rounded-xl flex-center mr-6"
                style={{ marginRight: '25px' }}
                onClick={() => AuthContainer}
              >
                Sign In
              </button>
            {/* </SignInButton> */}
            </Link>

            {/* <SignUpButton > */}

            <Link to="/sign-up">

              <button
                aria-label="sign-up"
                className="bg-white/5 z-[999] relative px-3 py-1.5 shadow rounded-xl flex-center mr-6"
                style={{ marginRight: '25px' }}
              >
                Sign Up
              </button>
              </Link>
            {/* </SignUpButton> */}
          </SignedOut>

          {/* Show User Profile Dropdown when logged in */}
          <SignedIn>
            
          <div className="flex items-center space-x-4">
            
            <UserName />
          

          </div>
            <div className="flex items-center space-x-4">
              {/* Clerk User Button with Dropdown */}
              <UserButton 
                appearance={{
                  elements: {
                    userButtonAvatarBox: 'w-11 h-11',
                    userButtonPopoverCard: 'p-2 shadow-lg rounded-xl'
                  }
                }}
              />
            </div>
          </SignedIn>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <MobMenu Menus={Menus} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MultiLevelNavbar;