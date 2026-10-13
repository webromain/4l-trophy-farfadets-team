import Section from "@/components/ui/Section";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import Button from "@/components/ui/Button";

export default function SuppliesSection() {
  return (
    <Section headingId="fournitures">
      <h2 id="fournitures" className="sr-only">
        Les fournitures collectées
      </h2>
      <PhotoPlaceholder
        label="Photo des fournitures collectées"
        caption="Photo pleine largeur, à fournir pendant la préparation"
      />
      <div className="mt-8">
        <Button href="/contact">Nous contacter</Button>
      </div>
    </Section>
  );
}
