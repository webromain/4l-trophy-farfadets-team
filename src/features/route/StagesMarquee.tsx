import Marquee from "@/components/ui/Marquee";
import { STAGES } from "@/content/route";

export default function StagesMarquee() {
  return <Marquee words={STAGES.map((stage) => stage.place)} />;
}
