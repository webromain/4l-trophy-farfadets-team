import Hero from "@/features/home/Hero";
import MainPartnerSection from "@/features/sponsors/MainPartnerSection";
import FiguresMarquee from "@/features/event/FiguresMarquee";
import CrewPreview from "@/features/crew/CrewPreview";
import EventSummarySection from "@/features/event/EventSummarySection";
import RoutePreview from "@/features/route/RoutePreview";
import StagesMarquee from "@/features/route/StagesMarquee";
import SolidaritySection from "@/features/event/SolidaritySection";
import ReasonsPreview from "@/features/sponsors/ReasonsPreview";
import BudgetSection from "@/features/budget/BudgetSection";
import ContactPreview from "@/features/contact/ContactPreview";

/* L'accueil déroule tout le dossier de sponsoring en version condensée. Chaque
   bloc vient de la fonctionnalité de son sujet (`src/features/`) : une `*Section`
   complète, ou un `*Preview` qui résume une page et y renvoie. */
export default function HomePage() {
  return (
    <>
      <Hero />
      <MainPartnerSection />
      <FiguresMarquee />
      <CrewPreview />
      <EventSummarySection />
      <RoutePreview />
      <StagesMarquee />
      <SolidaritySection />
      <ReasonsPreview />
      <BudgetSection />
      <ContactPreview />
    </>
  );
}
