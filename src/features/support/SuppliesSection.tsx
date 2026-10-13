import Section from "@/components/ui/Section";
import Illustration from "@/components/ui/Illustration";
import Photo from "@/components/ui/Photo";
import Button from "@/components/ui/Button";
import SuppliesDrawing from "./SuppliesDrawing";

export default function SuppliesSection() {
  return (
    <Section headingId="fournitures">
      <h2 id="fournitures" className="sr-only">
        Les fournitures collectées
      </h2>
      {/* La collecte se fait pendant la préparation : un dessin tient la place de
          sa photo, jusqu'à ce que `public/photos/fournitures.jpg` existe. */}
      <Photo
        name="fournitures"
        alt="Les fournitures scolaires et sportives collectées"
        fallback={
          <Illustration
            id="dessin-fournitures"
            title="Dessin de fournitures scolaires et sportives : une pile de livres, un carton d'où dépassent des crayons, une règle et un cahier, et un ballon"
            caption="Nous réunirons les fournitures scolaires et sportives pendant la préparation. Leur photo remplacera alors ce dessin."
          >
            <SuppliesDrawing />
          </Illustration>
        }
      />
      <div className="reveal mt-8">
        <Button href="/contact">Nous contacter</Button>
      </div>
    </Section>
  );
}
