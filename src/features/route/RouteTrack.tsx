import RouteMap from "./RouteMap";
import Timeline from "./Timeline";
import { STAGES } from "@/content/route";

type RouteTrackProps = {
  /* Titre réservé aux lecteurs d'écran, quand la page n'en fournit pas déjà un. */
  stagesHeading?: string;
};

/* La carte et les étapes du raid, partagées par l'accueil et la page Parcours. Sur
   grand écran, la carte reste épinglée pendant que les étapes défilent à
   l'horizontale (styles/track.css, `.track`). */
export default function RouteTrack({ stagesHeading }: RouteTrackProps) {
  return (
    <div className="track">
      <div className="track-frame grid gap-8 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-12">
        <RouteMap />
        <div className="track-viewport">
          {stagesHeading ? <h2 className="sr-only">{stagesHeading}</h2> : null}
          <Timeline milestones={STAGES} />
        </div>
      </div>
    </div>
  );
}
