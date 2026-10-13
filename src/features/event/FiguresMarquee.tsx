import Marquee from "@/components/ui/Marquee";
import { EVENT } from "@/content/event";
import { formatKilometres } from "@/lib/format";

export default function FiguresMarquee() {
  return (
    <Marquee
      words={[
        formatKilometres(EVENT.distanceKm),
        "3 pays",
        `${EVENT.days} jours`,
      ]}
    />
  );
}
