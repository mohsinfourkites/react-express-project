import React from "react";
import Logo from "../../assets/leaf1.png";
import DesktopMenu from "./DesktopMenu/DesktopMenu";
import styles from './MultiLevelNavbar.module.scss'; // Import SCSS module
import { Menus } from "../../utils/multi-level-meu";
import MobMenu from "./MobileMenu/Mobmenu";
import { Link } from "react-router-dom";

const MultiLevelNavbar: React.FC = () => {
  return (
    <header className={`${styles.navbar} ${styles.stickyNavbar} `}>
      <nav className="px-3.5 flex-center-between w-full max-w-8xl mx-auto" style={{ background: 'linear-gradient(to right, #859398, #283048)' }}>
        <div className="flex-center gap-x-3 z-[999] relative"
        style={{ marginLeft: '25px' }}>
          <img src={Logo} alt="Logo" className="size-8" />
          <h3 className="text-lg font-semibold">Jannat-E-Kashmir</h3>
        </div>

        <ul className="gap-x-1 lg:flex-center hidden">
          {Menus.map((menu) => (
        <DesktopMenu menu={menu} key={menu.name} />
          ))}
        </ul>

        <div className="flex-center gap-x-5">
            <Link to="/login">
              <button
                aria-label="sign-in"
                className="bg-white/5 z-[999] relative px-3 py-1.5 shadow rounded-xl flex-center mr-6"
                style={{ marginRight: '25px' }}
              >
                Sign In / Sign Up
                {/* <UserDeatilsDropDown /> */}
              </button>
            </Link>
          <div className="lg:hidden">
        <MobMenu Menus={Menus} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MultiLevelNavbar;
