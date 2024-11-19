
import { MeteorsDemo } from '../../components/AceternityUI/MeteorCard/AMeteorCard';
import GalleryCard1 from '../../components/GalleryCard/GalleryCard';
import HeroSection from '../../components/Hero/Hero';
import AboutTourAndTextMohsin from '../../components/MyFigma/AboutTourAndText/AboutTourAndText';
import PackageCardMohsin from '../../components/MyFigma/PackageCardMohsin/PackageCardMohsin';
import { GulmargCard, PahalgamCard, SonmargCard } from '../../components/MyFigma/PackageCardMohsin/ReusableCardMohsin';
import ProgressiveCarousel from '../../components/ProgressiveCarousel/ProgressiveCarousel';
import styles from './HomePage.module.scss'

const HomePage: React.FC = () => {
  return (
    <>

    <HeroSection />
      <h1 className="text-center text-3xl font-semibold mt-10 mb-10 text-white">
        Top Places To Visit
      </h1>

      <div className={styles.packageCardContainer}>
      <PackageCardMohsin {...GulmargCard} />
          <PackageCardMohsin {...PahalgamCard} />
          <PackageCardMohsin {...SonmargCard} />
          </div>

          <AboutTourAndTextMohsin />

        <div className={styles.ProgressiveCarouselContainer}>
          <ProgressiveCarousel />
        </div>

        <div className={styles.MeteorCarouselContainer}>
        <MeteorsDemo />
        <MeteorsDemo />
        <MeteorsDemo />
        <MeteorsDemo />
        </div>

        <div className={styles.MeteorCarouselContainer}>
        <GalleryCard1 />
        <GalleryCard1 />
        </div>
      {/* <AnotherTabs/> */}
    </>
  );
};

export default HomePage;
