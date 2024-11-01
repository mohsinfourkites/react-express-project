// travel-react-frontend/src/components/MultiLevelNavbar/MultiLevelNavbar.tsx

import React from "react";
// Ensure the import path is correct
import Logo from "../../assets/logo.webp";
import DesktopMenu from "./DesktopMenu/DesktopMenu";

import styles from './MultiLevelNavbar.module.scss'; // Import SCSS module
import { Menus } from "../../utils/multi-level-meu";
import MobMenu from "./MobileMenu/Mobmenu";

const MultiLevelNavbar: React.FC = () => {
  return (
    <div>
      <header className={`${styles.navbar} h-16 text-[15px] fixed inset-0`}>
        <nav className={`px-3.5 flex-center-between w-full max-w-7xl mx-auto`}>
          <div className="flex-center gap-x-3 z-[999] relative">
            <img src={Logo} alt="Logo" className="size-8" />
            <h3 className="text-lg font-semibold">Framer</h3>
          </div>

          <ul className="gap-x-1 lg:flex-center hidden">
            {Menus.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}
          </ul>
          <div className="flex-center gap-x-5">
            <button
              aria-label="sign-in"
              className={`bg-white/5 z-[999] relative px-3 py-1.5 shadow rounded-xl flex-center`}
            >
              Sign In
            </button>
            <div className="lg:hidden">
              <MobMenu Menus={Menus} />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default MultiLevelNavbar;
