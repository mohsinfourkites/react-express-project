import React, { useState } from 'react';
import styles from './Tabs.module.scss';
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import GalleryCard from '../../GalleryCard/GalleryCard';
import GalleryCard1 from '../../GalleryCard/GalleryCard';
import UserDeatilsDropDown from '../../NextUI/LoginDropDown/LoginDropDown';

// Import custom components
// import Gulmarg from './Gulmarg';
// import Snow from './Snow';
// import Skiing from './Skiing';
// ... import other components as needed

const TabsComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className={styles.container}>
      <CNav variant="tabs" className={styles.navTabs}>
        {['Gulmarg', 'Pahalgam', 'Sonmarg', 'Srinagar', 'Bangus', 'Ladakh', 'Kokernag', 'Verinag'].map((tabName, index) => (
          <CNavItem key={index}>
            <CNavLink
              active={activeTab === index}
              onClick={() => handleTabClick(index)}
              className={`${styles.navLink} ${activeTab === index ? styles.activeTab : ''}`}
            >
              {tabName}
            </CNavLink>
          </CNavItem>
        ))}
      </CNav>
      <CTabContent className={styles.tabContent}>
        <CTabPane visible={activeTab === 0} className={styles.tabPane}>
          {/* <Gulmarg />
          <Snow />
          <Skiing /> */}
            {/* Gallery Section */}
      <GalleryCard1 />
        </CTabPane>
        <CTabPane visible={activeTab === 1} className={styles.tabPane}>
          {/* Components specific to the Pahalgam tab */}
          {/* <Pahalgam /> */}
          {/* Add other components as needed */}

          <UserDeatilsDropDown />
        </CTabPane>
        <CTabPane visible={activeTab === 2} className={styles.tabPane}>
          {/* Components specific to the Sonmarg tab */}
          {/* <Sonmarg /> */}
        </CTabPane>
        {/* Repeat this structure for other tabs with their respective components */}
      </CTabContent>
    </div>
  );
};

export default TabsComponent;
