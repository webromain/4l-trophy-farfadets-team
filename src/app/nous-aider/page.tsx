import type { Metadata } from "next";
import InKindSupportSection from "@/features/support/InKindSupportSection";
import DonationSection from "@/features/support/DonationSection";
import SuppliesSection from "@/features/support/SuppliesSection";

export const metadata: Metadata = {
  title: "Nous aider",
  description:
    "Pièces, préparation mécanique, fournitures scolaires, équipement ou don : plusieurs façons de soutenir l'équipage des Farfadets au 4L Trophy 2027.",
};

export default function SupportPage() {
  return (
    <>
      <InKindSupportSection />
      <DonationSection />
      <SuppliesSection />
    </>
  );
}
