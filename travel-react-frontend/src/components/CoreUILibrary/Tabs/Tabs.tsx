import React, { useState } from 'react';
import styles from './Tabs.module.scss';
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import GalleryCard from '../../GalleryCard/GalleryCard';
import GalleryCard1 from '../../GalleryCard/GalleryCard';
import UserDeatilsDropDown from '../../NextUI/LoginDropDown/LoginDropDown';
import NextUISwitch from '../../NextUI/Switch/NextUISwitch';
import NextUITable from '../../NextUI/Table/NextUITable';
import NextUILoadingBar from '../../NextUI/LoadingBar/NextUILoadingBar';
import NextUITextArea from '../../NextUI/TextArea/NextUITextArea';
import { BentoGridThirdDemo } from '../../AceternityUI/BentoGrid/BentoGridThirdDemo';
import { InfiniteMovingCardsDemo } from '../../AceternityUI/InfiniteMovingCards/AInfiniteMovingCrads';
import { LampDemo } from '../../AceternityUI/LampSectionHeader/ALampSectionHeader';
import { MeteorsDemo } from '../../AceternityUI/MeteorCard/AMeteorCard';
import { SignupFormDemo } from '../../AceternityUI/SignUpFrom/ASignUpFrom';
import { StickyScrollRevealDemo } from '../../AceternityUI/AStickyScrollTextImage/AStickyScrollTextImage';
import { BackgroundGradientDemo } from '../../AceternityUI/GradientCard/AGradientCard';
import { TimelineDemo } from '../../AceternityUI/TimeLineScroll/TimeLineScroll';

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
        {['Gulmarg', 'Pahalgam', 'Sonmarg', 'Srinagar', 'Bangus', 'Ladakh', 'Kokernag', 'Verinag', 'Anantanag', 'SinthanTop', 'Drang', 'Tangmarg', 'URI', 'Budgam' ].map((tabName, index) => (
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
            <div className={styles.LadakhContainer1st}></div>
      <GalleryCard1 />
        </CTabPane>
        <CTabPane visible={activeTab === 1} className={styles.tabPane}>
          {/* Components specific to the Pahalgam tab */}
          {/* <Pahalgam /> */}
          {/* Add other components as needed */}
          <div className={styles.LadakhContainer1st}></div>
          <UserDeatilsDropDown />
        </CTabPane>
        <CTabPane visible={activeTab === 2} className={styles.tabPane}>
          {/* Components specific to the Sonmarg tab */}
          {/* <Sonmarg /> */}
          {/* <NextUISwitch /> */}
          <div className={styles.LadakhContainer1st}></div>
          <NextUITable />
        </CTabPane>

        <CTabPane visible={activeTab === 3} className={styles.tabPane}>
          {/* Components specific to the Sonmarg tab */}
          {/* <Sonmarg /> */}
          {/* <NextUISwitch /> */}
          <div className={styles.LadakhContainer1st}></div>
          <NextUILoadingBar />
        </CTabPane>

        <CTabPane visible={activeTab === 4} className={styles.tabPane}>
          {/* Components specific to the Sonmarg tab */}
          {/* <Sonmarg /> */}
          {/* <NextUISwitch /> */}
          <div className={styles.LadakhContainer1st}></div>
          <NextUITextArea />
        </CTabPane>

        <CTabPane visible={activeTab === 5} className={styles.tabPane}>
          {/* Components specific to the Sonmarg tab */}
          {/* <Sonmarg /> */}
          {/* <NextUISwitch /> */}
          <div className={styles.LadakhContainer1st}>
          <BentoGridThirdDemo />
          </div>


        </CTabPane>


        <CTabPane visible={activeTab === 6} className={styles.tabPane}>
          {/* Components specific to the Sonmarg tab */}
          {/* <Sonmarg /> */}
          {/* <NextUISwitch /> */}
          <div className={styles.LadakhContainer1st}></div>
          <InfiniteMovingCardsDemo />
        </CTabPane>

        <CTabPane visible={activeTab === 7} className={styles.tabPane}>
          {/* Components specific to the Sonmarg tab */}
          {/* <Sonmarg /> */}
          {/* <NextUISwitch /> */}
          <div className={styles.LadakhContainer1st}></div>
          <LampDemo />
        </CTabPane>


        <CTabPane visible={activeTab === 8} className={styles.tabPane}>
          {/* Components specific to the Sonmarg tab */}
          {/* <Sonmarg /> */}
          {/* <NextUISwitch /> */}
          <div className={styles.LadakhContainer1st}>
          <MeteorsDemo />
          </div>
        </CTabPane>


        <CTabPane visible={activeTab === 9} className={styles.tabPane}>
          {/* Components specific to the Sonmarg tab */}
          {/* <Sonmarg /> */}
          {/* <NextUISwitch /> */}
          <div className={styles.LadakhContainer1st}></div>
          <SignupFormDemo />
        </CTabPane>


        <CTabPane visible={activeTab === 10} className={styles.tabPane}>
          {/* Components specific to the Sonmarg tab */}
          {/* <Sonmarg /> */}
          {/* <NextUISwitch /> */}
          <div className={styles.LadakhContainer1st}></div>
          <StickyScrollRevealDemo />
        </CTabPane>

        <CTabPane visible={activeTab === 11} className={styles.tabPane}>
          {/* Components specific to the Sonmarg tab */}
          {/* <Sonmarg /> */}
          {/* <NextUISwitch /> */}
          <div className={styles.LadakhContainer1st}></div>
          {/* <BackgroundGradientDemo /> */}
          <TimelineDemo />
        </CTabPane>


        <CTabPane visible={activeTab === 12} className={styles.tabPane}>
          {/* Components specific to the Sonmarg tab */}
          {/* <Sonmarg /> */}
          {/* <NextUISwitch /> */}
          <div className={styles.LadakhContainer1st}></div>
          <LampDemo />
        </CTabPane>


        <CTabPane visible={activeTab === 13} className={styles.tabPane}>
          {/* Components specific to the Sonmarg tab */}
          {/* <Sonmarg /> */}
          {/* <NextUISwitch /> */}
          <div className={styles.LadakhContainer1st}></div>
          <LampDemo />
        </CTabPane>


        {/* Repeat this structure for other tabs with their respective components */}
      </CTabContent>
    </div>
  );
};

export default TabsComponent;
