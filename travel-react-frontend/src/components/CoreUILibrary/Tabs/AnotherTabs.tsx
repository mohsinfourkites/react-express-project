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
import { OrbitingCirclesDemo } from "../../MagicUI/OrbitingCircles/OrbitingCircles";
import { IconCloudDemo } from "../../MagicUI/InteractingIconCloud/InteractingIconCloud";
import { AnimatedCircularProgressBar } from "../../MagicUI/AnimatedCircularProgressBar/CircleBar";
import { AnimatedCircularProgressBarDemo } from "../../MagicUI/AnimatedCircularProgressBar/AnimatedCircularProgressBar";
import UILayoutCard from "../../UILayoutCard/UILayoutCard";
import ProductCardUI from "../../ProductCard/ProductCard";
import TextRandomizer from "../../TextRandomizer/TextRandomizer";
import ImageMouseTrailGrid from "../../ImageMouseTrailGrid/ImageMouseTrailGrid";
import ProgressiveCarousel from "../../ProgressiveCarousel/ProgressiveCarousel";
import { BookingCard } from "../../MaterialTailWind/Card";
import PackageCard from "../../MyCards/Git/PackageCard";
import { BackgroundBeamsDemo } from "../../AceternityUI/BackgroundBeams/ABackgroundBeams";
import SaveToLaterBookmark from "../../UIVerse/SaveToLaterBookmark/SaveToLaterBookmark";
import CardWithTextButton from "../../UIVerse/CardWithTextButton/CardWithTextButton";
import HoverColourChangeCard from "../../UIVerse/HoverColourChangeCard/HoverColourChangeCard";
import RankHoverCard from "../../UIVerse/RankHoverCard/RankHoverCard";
import HoverBookMark from "../../UIVerse/HoverBookmark/HoverBookMark";
import HoverCardGreyBlue from "../../UIVerse/HoverCard/HoverCardGreyBlue";
import SearchBarHover from "../../UIVerse/SearchBarHover/SearchBarHover";
import HoverRotateButton from "../../UIVerse/HoverRotateButton/HoverRotateButton";
import CardHoverText from "../../UIVerse/CardHoverText/CardHoverText";
import BeautifulCardWithButtons from "../../UIVerse/BeautifulCardWithButtons/BeautifulCardWithButtons";
import SimpleColourHoverCard from "../../UIVerse/SimpleColourHoverCard/SimpleColourHoverCard";
import RotateHoverCard from "../../UIVerse/RotateHoverCard/RotateHoverCard";
import GlassmorphicCard from "../../UIVerse/GlassmorphicCard/GlassmorphicCard";
import JarvisReactorEffect from "../../UIVerse/JarvisReactorEffect/JarvisReactorEffect";
import WeatherCard from "../../UIVerse/WeatherCard/WeatherCard";
import CardHoverTextSimple from "../../UIVerse/CardHoverTextSimple/CardHoverTextSimple";
import AnimateBookPagesLoader from "../../UIVerse/AnimateBookPages/AnimateBookPages";
import StarRatingsAnimated from "../../UIVerse/StarRatingsAnimated/StarRatingsAnimated";
import CardWithTextLogo from "../../UIVerse/CardWithTextLogo/CardWithTextLogo";
import AnimatedAboutMeCard from "../../UIVerse/AnimatedAboutMeCard/AnimatedAboutMeCard";
import PackageCardMohsin from "../../MyFigma/PackageCardMohsin/PackageCardMohsin";
import { GulmargCard, PahalgamCard, SonmargCard } from "../../MyFigma/PackageCardMohsin/ReusableCardMohsin";







const AnotherTabs: React.FC = () => {
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
          
          <TextRandomizer />
        </CTabPane>

        {/* Pahalgam */}
        <CTabPane visible={activeTab === 1} className={styles.tabPane}>
          <div className={styles.Pahalgam}>
            <ImageMouseTrailGrid />
          </div>

          {/* Sonmarg */}
        </CTabPane>
        <CTabPane visible={activeTab === 2} className={styles.tabPane}>
          <div className={styles.LadakhContainer1st}>
          <ProgressiveCarousel />
          </div>
        </CTabPane>

        {/* Srinagar */}
        <CTabPane visible={activeTab === 3} className={styles.tabPane}>
          <div className={styles.Srinagar}>
          {/* <NextUILoadingBar /> */}
          <BookingCard />
          </div>
        </CTabPane>

        {/* Bangus */}
        <CTabPane visible={activeTab === 4} className={styles.tabPane}>
          <div className={styles.LadakhContainer1st}></div>
          <PackageCard  />
        </CTabPane>

        {/* Ladakh */}
        <CTabPane visible={activeTab === 5} className={styles.tabPane}>
          <div className={styles.LadakhContainer1st}>
            {/* <BackgroundBeamsDemo /> */}
            <SaveToLaterBookmark />
          </div>
          <div className={styles.LadakhContainer1st}>
          {/* <CardWithTextButton /> */}
          <HoverColourChangeCard />
          <div className={styles.LadakhContainer1st}></div>
          <RankHoverCard />
          </div>
          <div className={styles.LadakhContainer1st}></div>
          <HoverBookMark />
          <div className={styles.LadakhContainer1st}>
          <HoverCardGreyBlue />
          </div>

          <div className={styles.LadakhContainer1st}>
          <SearchBarHover />
          </div>

          <div className={styles.LadakhContainer1st}>
          <HoverRotateButton />
          </div>

          <div className={styles.LadakhContainer1st}>
          <CardHoverText />
          </div>

         

        </CTabPane>

        {/* Kokernag */}
        <CTabPane visible={activeTab === 6} className={styles.tabPane}>

        <div className={styles.LadakhContainer1st}>
          <BeautifulCardWithButtons />
        </div>

        <div className={styles.LadakhContainer1st}>
          <SimpleColourHoverCard />
        </div>

        <div className={styles.LadakhContainer1st}>
          <RotateHoverCard />
        </div>

        {/* <div className={styles.LadakhContainer1st}>
          <GlassmorphicCard />
        </div> */}

        

        </CTabPane>

        {/* Verinag */}
        <CTabPane visible={activeTab === 7} className={styles.tabPane}>


        <div className={styles.LadakhContainer1st}>
          <WeatherCard />
        </div>

        <div className={styles.LadakhContainer1st}>
          <CardHoverTextSimple />
        </div>

        <div className={styles.LadakhContainer1st}>
          <AnimateBookPagesLoader />
        </div>

        <div className={styles.LadakhContainer1st}>
          <StarRatingsAnimated />
        </div>



        </CTabPane>

        {/* Anantanag  */}
        <CTabPane visible={activeTab === 8} className={styles.tabPane}>

          <div className={styles.LadakhContainer1st}>
            <MeteorsDemo />
          </div>

          <div className={styles.LadakhContainer1st}>
            <CardWithTextLogo />
          </div>

          <div className={styles.LadakhContainer1st}>
            <AnimatedAboutMeCard />
          </div>


        </CTabPane>

        {/* SinthanTop */}
        <CTabPane visible={activeTab === 9} className={styles.tabPane}>


          <div className={styles.SinthanTop}>

          <PackageCardMohsin {...GulmargCard} />
          <PackageCardMohsin {...PahalgamCard} />
          <PackageCardMohsin {...SonmargCard} />
          


          </div>
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

export default AnotherTabs;
