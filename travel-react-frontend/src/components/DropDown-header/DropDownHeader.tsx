import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
// import { ReactComponent as BellIcon } from '../../assets/icons/bell.svg';
// import { ReactComponent as MessengerIcon } from '../../assets/icons/messenger.svg';
// import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg';
// import { ReactComponent as CaretIcon } from '../../assets/icons/caret.svg';
// import { ReactComponent as CogIcon } from '../../assets/icons/cog.svg';
// import { ReactComponent as ChevronIcon } from '../../assets/icons/chevron.svg';
// import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg';
// import { ReactComponent as BoltIcon } from '../../assets/icons/bolt.svg';

import styles from './DropDownHeader.module.scss';
import { PlusIcon, BellIcon, CogIcon, BoltIcon, MessageCircle as MessengerIcon, ChevronDown as CaretIcon, ChevronRight as ChevronIcon, ArrowLeft as ArrowIcon } from 'lucide-react';

const DropDownHeader: React.FC = () => {
  return (
    <Navbar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />

      <NavItem icon={<CaretIcon />}>
        <DropdownMenu />
      </NavItem>
    </Navbar>
  );
};

const Navbar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarNav}>{children}</ul>
    </nav>
  );
};

const NavItem: React.FC<{ icon: React.ReactNode; children?: React.ReactNode }> = ({ icon, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <li className={styles.navItem}>
      <a href="#" className={styles.iconButton} onClick={() => setOpen(!open)}>
        {icon}
      </a>
      {open && children}
    </li>
  );
};

const DropdownMenu: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dropdownRef.current) {
      setMenuHeight((dropdownRef.current.firstChild as HTMLElement)?.scrollHeight || null);
    }
  }, []);

  const calcHeight = (el: HTMLElement) => {
    const height = el.scrollHeight;
    setMenuHeight(height);
  };

  const DropdownItem: React.FC<{ 
    children: React.ReactNode;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    goToMenu?: string;
  }> = ({ children, leftIcon, rightIcon, goToMenu }) => {
    return (
      <a href="#" className={styles.menuItem} onClick={() => goToMenu && setActiveMenu(goToMenu)}>
        <span className={styles.iconButton}>{leftIcon}</span>
        {children}
        <span className={styles.iconRight}>{rightIcon}</span>
      </a>
    );
  };

  return (
    <div className={styles.dropdown} style={{ height: menuHeight || 0 }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames={styles.menuPrimary}
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className={styles.menu}>
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon />} goToMenu="settings">
            Settings
          </DropdownItem>
          <DropdownItem leftIcon="🦧" rightIcon={<ChevronIcon />} goToMenu="animals">
            Animals
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames={styles.menuSecondary}
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className={styles.menu}>
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames={styles.menuSecondary}
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className={styles.menu}>
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default DropDownHeader;
