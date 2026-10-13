import type { Metadata } from "next";
import RouteSection from "@/features/route/RouteSection";
import OrienteeringSection from "@/features/route/OrienteeringSection";
import { EVENT } from "@/content/event";
import { formatKilometres } from "@/lib/format";

export const metadata: Metadata = {
  title: "Le parcours",
  description: `De Biarritz à Marrakech : ${formatKilometres(
    EVENT.distanceKm,
  )} en douze jours, à travers la France, l'Espagne et le Maroc, du 17 au 28 février 2027.`,
};

export default function RoutePage() {
  return (
    <>
      <RouteSection />
      <OrienteeringSection />
    </>
  );
}
