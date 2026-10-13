import type { Metadata } from "next";
import CrewSection from "@/features/crew/CrewSection";

export const metadata: Metadata = {
  title: "L'équipage",
  description:
    "Romain Poisson et Catalin Stefanescu, deux amis passionnés d'automobile et d'informatique : un profil industriel et un profil numérique, au départ du 4L Trophy 2027.",
};

export default function CrewPage() {
  return <CrewSection />;
}
