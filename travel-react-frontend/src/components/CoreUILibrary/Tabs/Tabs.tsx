import React, { useState } from "react";
import styles from "./Tabs.module.scss";
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";

import GalleryCard1 from "../../GalleryCard/GalleryCard";

import NextUITable from "../../NextUI/Table/NextUITable";
import NextUILoadingBar from "../../NextUI/LoadingBar/NextUILoadingBar";
import NextUITextArea from "../../NextUI/TextArea/NextUITextArea";
import { BentoGridThirdDemo } from "../../AceternityUI/BentoGrid/BentoGridThirdDemo";
import { InfiniteMovingCardsDemo } from "../../AceternityUI/InfiniteMovingCards/AInfiniteMovingCrads";
import { LampDemo } from "../../AceternityUI/LampSectionHeader/ALampSectionHeader";
import { MeteorsDemo } from "../../AceternityUI/MeteorCard/AMeteorCard";
import { SignupFormDemo } from "../../AceternityUI/SignUpFrom/ASignUpFrom";
import { StickyScrollRevealDemo } from "../../AceternityUI/AStickyScrollTextImage/AStickyScrollTextImage";

import { FeaturesSectionDemo } from "../../AceternityUI/FeatureCard/FeatureCard";
import { LayoutGridDemo } from "../../AceternityUI/LayoutGrid/LayoutGrid";

import { WobbleCardDemo } from "../../AceternityUI/WobbleCard/WobbleCard";

import { ProgressSliderPage } from "../../EldoraUI/ProgressSlider/progress-slider";

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
        {[
          "Gulmarg",
          "Pahalgam",
          "Sonmarg",
          "Srinagar",
          "Bangus",
          "Ladakh",
          "Kokernag",
          "Verinag",
          "Anantanag",
          "SinthanTop",
          "Drang",
          "Tangmarg",
          "URI",
          "Budgam",
        ].map((tabName, index) => (
          <CNavItem key={index}>
            <CNavLink
              active={activeTab === index}
              onClick={() => handleTabClick(index)}
              className={`${styles.navLink} ${
                activeTab === index ? styles.activeTab : ""
              }`}
            >
              {tabName}
            </CNavLink>
          </CNavItem>
        ))}
      </CNav>
      <CTabContent className={styles.tabContent}>
        {/* Gulmarg */}
        <CTabPane visible={activeTab === 0} className={styles.tabPane}>
          <div className={styles.LadakhContainer1st}></div>
          <GalleryCard1 />
        </CTabPane>

        {/* Pahalgam */}
        <CTabPane visible={activeTab === 1} className={styles.tabPane}>
          <div className={styles.Pahalgam}>
            <ProgressSliderPage />
          </div>

          {/* Sonmarg */}
        </CTabPane>
        <CTabPane visible={activeTab === 2} className={styles.tabPane}>
          <div className={styles.LadakhContainer1st}></div>
          <NextUITable />
        </CTabPane>

        {/* Srinagar */}
        <CTabPane visible={activeTab === 3} className={styles.tabPane}>
          <div className={styles.LadakhContainer1st}></div>
          {/* <NextUILoadingBar /> */}
          
        </CTabPane>

        {/* Bangus */}
        <CTabPane visible={activeTab === 4} className={styles.tabPane}>
          <div className={styles.LadakhContainer1st}></div>
          <NextUITextArea />
        </CTabPane>

        {/* Ladakh */}
        <CTabPane visible={activeTab === 5} className={styles.tabPane}>
          <div className={styles.LadakhContainer1st}>
            <BentoGridThirdDemo />
          </div>
        </CTabPane>

        {/* Kokernag */}
        <CTabPane visible={activeTab === 6} className={styles.tabPane}>
          <div className={styles.LadakhContainer1st}></div>
          <InfiniteMovingCardsDemo />
        </CTabPane>

        {/* Verinag */}
        <CTabPane visible={activeTab === 7} className={styles.tabPane}>
          <div className={styles.LadakhContainer1st}></div>
          <LampDemo />
        </CTabPane>

        {/* Anantanag  */}
        <CTabPane visible={activeTab === 8} className={styles.tabPane}>
          <div className={styles.LadakhContainer1st}>
            <MeteorsDemo />
          </div>
        </CTabPane>

        {/* SinthanTop */}
        <CTabPane visible={activeTab === 9} className={styles.tabPane}>
          <div className={styles.LadakhContainer1st}></div>
          <SignupFormDemo />
        </CTabPane>

        {/*Drang*/}
        <CTabPane visible={activeTab === 10} className={styles.tabPane}>
          <div className={styles.LadakhContainer1st}></div>
          <StickyScrollRevealDemo />
        </CTabPane>

        {/* Tangmarg  */}
        <CTabPane visible={activeTab === 11} className={styles.tabPane}>
          <div className={styles.LadakhContainer1st}>
            <FeaturesSectionDemo />
          </div>
        </CTabPane>

        {/* URI  */}
        <CTabPane visible={activeTab === 12} className={styles.tabPane}>
          <div className={styles.uri}></div>
          <LayoutGridDemo />
        </CTabPane>

        {/*  Budgam */}
        <CTabPane visible={activeTab === 13} className={styles.tabPane}>
          <div className={styles.LadakhContainer1st}> </div>
          <WobbleCardDemo />
        </CTabPane>
      </CTabContent>
    </div>
  );
};

export default TabsComponent;
