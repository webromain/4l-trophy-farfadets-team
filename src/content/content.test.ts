import { existsSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { BUDGET } from "./budget";
import { CONTACTS, SOCIAL_LINKS } from "./contact";
import { ASSOCIATION, CREW } from "./crew";
import { EVENT } from "./event";
import { STAGES } from "./route";
import { SITE_URL } from "./site";
import { SPONSORS, findMainPartner, type Sponsor } from "./sponsors";
import {
  HIGHEST_TIER_AMOUNT,
  LOWEST_TIER_AMOUNT,
  MAIN_TIER,
  SPONSORSHIP_DECK,
  SPONSORSHIP_TIERS,
} from "./sponsorship";

/* Ces tests ne vérifient pas du code mais la cohérence du contenu : un montant
   modifié à un seul endroit, un fichier déplacé, un sponsor mal saisi. */

const inPublic = (href: string) => join(process.cwd(), "public", href);

describe("budget", () => {
  it("le total est la somme des postes", () => {
    const sum = BUDGET.lines.reduce((total, line) => total + line.amount, 0);
    expect(sum).toBe(BUDGET.total);
  });

  it("l'objectif sponsors et la part déjà financée font le total", () => {
    expect(BUDGET.sponsorsGoal + BUDGET.alreadyFunded).toBe(BUDGET.total);
  });

  it("la part déjà financée est la subvention de l'association", () => {
    expect(BUDGET.alreadyFunded).toBe(ASSOCIATION.grant);
  });

  it("le poste Inscription reprend les frais d'inscription du raid", () => {
    const entry = BUDGET.lines.find((line) => line.label === "Inscription");
    expect(entry?.amount).toBe(EVENT.entryFee);
  });

  it("chaque poste a un libellé unique et un montant positif", () => {
    const labels = BUDGET.lines.map((line) => line.label);
    expect(new Set(labels).size).toBe(labels.length);
    expect(BUDGET.lines.every((line) => line.amount > 0)).toBe(true);
  });
});

describe("formules de partenariat", () => {
  it("portent des lettres uniques, dans l'ordre", () => {
    const letters = SPONSORSHIP_TIERS.map((tier) => tier.letter);
    expect(letters).toEqual([...letters].sort());
    expect(new Set(letters).size).toBe(letters.length);
  });

  it("sont classées par montant croissant", () => {
    const amounts = SPONSORSHIP_TIERS.map((tier) => tier.amount);
    expect(amounts).toEqual([...amounts].sort((a, b) => a - b));
    expect(LOWEST_TIER_AMOUNT).toBe(amounts[0]);
    expect(HIGHEST_TIER_AMOUNT).toBe(amounts.at(-1));
  });

  it("n'ont qu'une formule unique : la plus chère, celle du partenaire principal", () => {
    expect(SPONSORSHIP_TIERS.filter((tier) => tier.unique)).toEqual([
      MAIN_TIER,
    ]);
    expect(MAIN_TIER.amount).toBe(HIGHEST_TIER_AMOUNT);
  });

  it("promettent toutes au moins une contrepartie et un emplacement", () => {
    for (const tier of SPONSORSHIP_TIERS) {
      expect(tier.perks.length, tier.name).toBeGreaterThan(0);
      expect(tier.placement, tier.name).not.toBe("");
    }
  });

  it("suffisent à atteindre l'objectif si toutes sont vendues une fois", () => {
    const once = SPONSORSHIP_TIERS.reduce(
      (total, tier) => total + tier.amount,
      0,
    );
    expect(once).toBeLessThanOrEqual(BUDGET.sponsorsGoal);
  });
});

describe("dossier de sponsoring", () => {
  it("le PDF existe à l'adresse du bouton de téléchargement", () => {
    expect(existsSync(inPublic(SPONSORSHIP_DECK.href))).toBe(true);
  });

  it("le poids annoncé est celui du fichier", () => {
    const megabytes =
      statSync(inPublic(SPONSORSHIP_DECK.href)).size / 1_000_000;
    const announced = megabytes.toFixed(1).replace(".", ",");
    expect(SPONSORSHIP_DECK.fileSize).toBe(`${announced} Mo`);
  });
});

describe("raid et équipage", () => {
  it("le parcours part de la ville de départ et passe par l'arrivée", () => {
    expect(STAGES[0].place).toBe(EVENT.start);
    expect(STAGES.map((stage) => stage.place)).toContain(EVENT.finish);
  });

  it("chaque étape a des dates, un lieu et une description", () => {
    for (const stage of STAGES) {
      expect(stage.dates && stage.place && stage.description).toBeTruthy();
    }
  });

  it("la tranche d'âge du raid est cohérente", () => {
    expect(EVENT.minAge).toBeLessThan(EVENT.maxAge);
  });

  it("chaque membre a un rôle et une biographie, et des coordonnées à son prénom", () => {
    for (const member of CREW) {
      expect(member.role, member.firstName).not.toBe("");
      expect(member.bio.length, member.firstName).toBeGreaterThan(0);
      expect(member.photo, member.firstName).toMatch(/^[a-z0-9-]+$/);
      /* Le 4L Trophy est réservé aux étudiants de 18 à 28 ans. */
      expect(member.age, member.firstName).toBeGreaterThanOrEqual(18);
      expect(member.age, member.firstName).toBeLessThanOrEqual(28);
    }
    expect(CONTACTS.map((contact) => contact.firstName)).toEqual(
      CREW.map((member) => member.firstName),
    );
  });

  it("le compte Instagram est un nom de compte, pas une adresse", () => {
    if (SOCIAL_LINKS.instagram) {
      expect(SOCIAL_LINKS.instagram).toMatch(/^[a-z0-9._]+$/);
    }
  });

  it("les coordonnées renseignées sont bien formées", () => {
    for (const { phone, email } of CONTACTS) {
      if (phone) expect(phone).toMatch(/^(0|\+33 ?)[1-9]( ?\d{2}){4}$/);
      if (email) {
        expect(email.user).toMatch(/^[^@\s]+$/);
        expect(email.domain).toMatch(/^[^@\s]+\.[a-z]{2,}$/);
      }
    }
  });
});

describe("sponsors", () => {
  /* La liste est vide au lancement : ces règles s'appliquent à chaque sponsor
     ajouté. Elles remplacent une vérification au rendu. */
  const letters = SPONSORSHIP_TIERS.map((tier) => tier.letter);

  it("chaque sponsor a une formule qui existe", () => {
    for (const sponsor of SPONSORS) {
      expect(letters, sponsor.name).toContain(sponsor.tier);
    }
  });

  it("le logo est un fichier local présent dans public/sponsors/", () => {
    for (const sponsor of SPONSORS) {
      expect(sponsor.logo, sponsor.name).toMatch(/^\/sponsors\/[\w.-]+$/);
      expect(existsSync(inPublic(sponsor.logo)), sponsor.logo).toBe(true);
      expect(sponsor.logoWidth * sponsor.logoHeight).toBeGreaterThan(0);
    }
  });

  it("le site d'un sponsor est une adresse HTTPS valide", () => {
    for (const sponsor of SPONSORS) {
      if (sponsor.website) {
        expect(new URL(sponsor.website).protocol, sponsor.name).toBe("https:");
      }
    }
  });

  it("la formule unique n'est vendue qu'une fois", () => {
    const main = SPONSORS.filter(
      (sponsor) => sponsor.tier === MAIN_TIER.letter,
    );
    expect(main.length).toBeLessThanOrEqual(1);
  });

  it("le partenaire principal est le sponsor de la formule unique", () => {
    const sponsor = (name: string, tier: Sponsor["tier"]): Sponsor => ({
      name,
      tier,
      logo: "/sponsors/exemple.svg",
      logoWidth: 240,
      logoHeight: 80,
    });
    const list = [sponsor("Garage", "B"), sponsor("Banque", MAIN_TIER.letter)];
    expect(findMainPartner(list)?.name).toBe("Banque");
    expect(findMainPartner([sponsor("Garage", "B")])).toBeUndefined();
  });
});

describe("adresse du site", () => {
  it("est une adresse HTTPS absolue, sans chemin", () => {
    const url = new URL(SITE_URL);
    expect(url.protocol).toBe("https:");
    expect(url.pathname).toBe("/");
  });
});
