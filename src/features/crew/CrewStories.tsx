const STORIES = [
  {
    title: "Notre histoire",
    text: "Nous sommes amis et passionnés d'automobile depuis toujours. Le 4L Trophy, nous en rêvons depuis longtemps. En 2027, nous prenons le départ.",
  },
  {
    title: "Notre complémentarité",
    text: "Bastien apporte la mécanique et la conception pour préparer et fiabiliser la 4L. Romain prend en charge le site web, la communication digitale et la gestion du projet.",
  },
  {
    title: "Notre motivation",
    text: "Réaliser ce projet ensemble, de la première pièce changée jusqu'à l'arrivée à Marrakech, et le mettre au service d'une cause solidaire.",
  },
] as const;

export default function CrewStories() {
  return (
    <div className="glass rounded-panel p-6 sm:p-8">
      {STORIES.map((story) => (
        <div key={story.title} className="mb-6 last:mb-0">
          <h2 className="font-heading text-2xl font-bold text-ink">
            {story.title}
          </h2>
          <p className="mt-1 max-w-text leading-relaxed text-ink">
            {story.text}
          </p>
        </div>
      ))}
    </div>
  );
}
