import type { Metadata } from "next";
import ContactDetailsSection from "@/features/contact/ContactDetailsSection";
import SocialSection from "@/features/contact/SocialSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Vous souhaitez voir votre logo traverser le désert ? Contactez Romain et Bastien, l'équipage des Farfadets, pour en discuter.",
};

export default function ContactPage() {
  return (
    <>
      <ContactDetailsSection />
      <SocialSection />
    </>
  );
}
