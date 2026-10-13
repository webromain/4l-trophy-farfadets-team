import type { Metadata } from "next";
import ReasonsSection from "@/features/sponsors/ReasonsSection";
import TiersSection from "@/features/sponsors/TiersSection";
import PlacementsSection from "@/features/sponsors/PlacementsSection";
import NextStepsSection from "@/features/sponsors/NextStepsSection";
import { HIGHEST_TIER_AMOUNT, LOWEST_TIER_AMOUNT } from "@/content/sponsorship";
import { formatEuros } from "@/lib/format";

export const metadata: Metadata = {
  title: "Devenir sponsor",
  description: `Quatre formules de partenariat, de ${formatEuros(LOWEST_TIER_AMOUNT)} à ${formatEuros(HIGHEST_TIER_AMOUNT)}, pour afficher votre logo sur notre 4L de Biarritz à Marrakech et sur toutes nos communications.`,
};

export default function SponsorsPage() {
  return (
    <>
      <ReasonsSection />
      <TiersSection />
      <PlacementsSection />
      <NextStepsSection />
    </>
  );
}
