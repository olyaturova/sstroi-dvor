import { useState, useEffect } from "react";
import { FeedbackForm } from "@/features/feedback-form";
import { FrontPage } from "@/widgets/front-page";
import { HomePageStocks } from "@/widgets/home-stocks-section";
import { ScrollingAnnouncement } from "@/shared/ui/scrolling-announcement";
import { SpecialOffer } from "@/widgets/special-offer";
import { ModalPromo, ContentPromo } from "@/shared/ui/modal/promo-modal";
import { ScrollToTopBtn } from "@/shared/scroll";
import { Benefits } from "@/widgets/benefits-grid";
import { InteriorSwiper } from "@/widgets/interior-swiper";


export const HomePage = () => {
  const [modalPromoOpen, setModalPromoOpen] = useState(false);

  useEffect(() => {
    const modalTimer = setTimeout(() => setModalPromoOpen(true), 7000);
    return () => clearTimeout(modalTimer);
  }, []);

  const handleCloseModal = () => {
    setModalPromoOpen(false);
  };

  return (
    <>
      <ModalPromo 
        isOpen={modalPromoOpen} 
        onClose={handleCloseModal}
      >
        <ContentPromo onClose={handleCloseModal} />
      </ModalPromo>

      <main>
        <FrontPage />
        <ScrollToTopBtn />
        <Benefits />
        <InteriorSwiper />
        <ScrollingAnnouncement />
        <HomePageStocks />
        <SpecialOffer />
        <ScrollingAnnouncement />
        <div id="form">
          <FeedbackForm />
        </div>
      </main>
    </>
  );
};

export default HomePage;