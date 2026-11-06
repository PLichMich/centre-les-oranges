// src/data/equipe.ts
import type { ImageMetadata } from 'astro:assets';

// 📸 IMPORTS DES IMAGES OPTIMISÉES POUR LE SEO
import photoLydie from '../assets/equipe/lydie-junon-ergotherapeute-binche.jpg';
import photoMichael from '../assets/equipe/michael-plichart-psychologue-tcc-binche.jpg';
import photoCeline from '../assets/equipe/celine-mahieu-psychologue-tcc-la-louviere.jpg';
import photoAurelieH from '../assets/equipe/aurelie-holvoet-psychologue-therapie-breve-hypnose-binche.jpg';
import photoDaniela from '../assets/equipe/daniela-cisamolo-psychologue-emdr-sexologue-binche.jpg';
import photoLuana from '../assets/equipe/luana-bernunzo-psychologue-enfants-adolescents-binche.jpg';
import photoEva from '../assets/equipe/eva-ludik-psychologue-pleine-conscience-binche.jpg';
import photoGiovanna from '../assets/equipe/giovanna-trunfio-psychologue-emdr-enfants-adultes-binche.jpg';
import photoCelineV from '../assets/equipe/celine-vekeman-neuropsychologue-orthopedagogue-binche.jpg';
import photoValerie from '../assets/equipe/valerie-desclez-psychologue-coach-developpement-personnel-binche.jpg';
import photoCathy from '../assets/equipe/cathy-malosto-sophrologue-massotherapeute-binche.jpg';
import photoGearlyne from '../assets/equipe/gearlyne-nunez-neuropsychologue-binche-la-louviere.jpg';
import photoAlessia from '../assets/equipe/alessia-dal-bo-medecin-hypnotherapeute-binche.jpg';
import photoCynthia from '../assets/equipe/cynthia-viola-conseillere-conjugale-familiale-binche.jpg';
import photoGwendoline from '../assets/equipe/gwendoline-dhoop-juriste-mediatrice-familiale-binche.jpg';
import photoAdeline from '../assets/equipe/adeline-gomree-podologue-binche.jpg';
import photoPauline from '../assets/equipe/pauline-horny-podologue-binche.jpg';
import photoAurelieS from '../assets/equipe/aurelie-smeets-pedicure-medicale-binche.jpg';
import photoClementine from '../assets/equipe/clementine-delbruyere-dieteticienne-nutritionniste-binche.jpg';
import photoAnne from '../assets/equipe/anne-mengeot-naturopathe-binche.jpg';
import photoMathieu from '../assets/equipe/mathieu-gregoire-osteopathe-binche.jpg';
import photoElise from '../assets/equipe/elise-vandevoorde-psychomotricienne-binche.jpg';
import photoNathalie from '../assets/equipe/nathalie-dath-pilates-binche.jpg';
import photoJeanClaude from '../assets/equipe/jean-claude-degreef-tai-chi-qi-gong-binche.jpg';
import photoFanny from '../assets/equipe/fanny-mesdaght-yoga-chaise-binche.jpg';

export interface MembreEquipe {
  nom: string;
  specialite: string;
  telephone: string;
  image?: ImageMetadata;
  lien: string;
  altSEO?: string;
}

export const equipeData: Record<string, MembreEquipe> = {
  // --- PÔLE PSYCHOLOGIE & MENTAL ---
  "michael-plichart": {
    nom: "Michaël Plichart",
    specialite: "Psychologue Cognitivo-Comportementaliste",
    telephone: "0486/26.19.79",
    image: photoMichael,
    altSEO: "Portrait de Michaël Plichart, psychologue cognitivo-comportementaliste (TCC) à Péronnes-lez-Binche",
    lien: "/nos-services/psychologie/psychologie-cognitive-et-comportementale"
  },
  "celine-mahieu": {
    nom: "Céline Mahieu",
    specialite: "Psychologue Cognitivo-Comportementaliste",
    telephone: "0492/16.48.18",
    image: photoCeline,
    altSEO: "Portrait de Céline Mahieu, psychologue clinicienne TCC pour adultes et couples à Binche et La Louvière",
    lien: "/nos-services/psychologie/psychologie-cognitive-et-comportementale"
  },
  "aurelie-holvoet": {
    nom: "Aurélie Holvoet",
    specialite: "Psychologue Thérapie brève & Hypnose",
    telephone: "",
    image: photoAurelieH,
    altSEO: "Portrait d'Aurélie Holvoet, psychologue spécialisée en thérapie brève orientée solutions et hypnose au Centre Les Oranges",
    lien: "/nos-services/psychologie/la-therapie-breve"
  },
  "daniela-cisamolo": {
    nom: "Daniela Cisamolo",
    specialite: "Psychologue, Thérapeute EMDR, Sexologue & Coach amoureux",
    telephone: "0476/89.11.58",
    image: photoDaniela,
    altSEO: "Portrait de Daniela Cisamolo, psychologue, thérapeute EMDR et sexologue à Péronnes-lez-Binche",
    lien: "/nos-services/emdr"
  },
  "luana-bernunzo": {
    nom: "Luana Bernunzo",
    specialite: "Psychologue pour enfants, adolescents et jeunes adultes",
    telephone: "",
    image: photoLuana,
    altSEO: "Portrait de Luana Bernunzo, psychologue clinicienne pour enfants et adolescents dans la région de Binche",
    lien: "/nos-services/psychologie"
  },
  "eva-ludik": {
    nom: "Eva Ludik",
    specialite: "Psychologue clinicienne & Instructrice Pleine conscience",
    telephone: "0474/62.95.84",
    image: photoEva,
    altSEO: "Portrait d'Eva Ludik, psychologue clinicienne et instructrice en méditation pleine conscience à Binche",
    lien: "/nos-services/psychologie/meditation-pleine-conscience"
  },
  "giovanna-trunfio": {
    nom: "Giovanna Trunfio",
    specialite: "Psychologue pour enfants, adolescents et adultes",
    telephone: "0494/23.89.15",
    image: photoGiovanna,
    altSEO: "Portrait de Giovanna Trunfio, psychologue pour enfants, adolescents et adultes, thérapie EMDR à Binche",
    lien: "/nos-services/psychologie"
  },
  "celine-vekeman": {
    nom: "Céline Vekeman",
    specialite: "Neuropsychologue et Orthopédagogue Clinicienne",
    telephone: "0495/36.67.98",
    image: photoCelineV,
    altSEO: "Portrait de Céline Vekeman, neuropsychologue et orthopédagogue clinicienne au Centre Les Oranges",
    lien: "/nos-services/psychologie/neuropsychologie",
    actif: true,
    conventionne: true
  },
  "valerie-desclez": {
    nom: "Valérie Desclez",
    specialite: "Psychologue en thérapie brève et Coach en développement personnel",
    telephone: "0485/72.23.21",
    image: photoValerie,
    altSEO: "Portrait de Valérie Desclez, psychologue en thérapie brève et coach en développement personnel à Binche",
    lien: "/nos-services/psychologie/la-therapie-breve"
  },
  "gearlyne-nunez": {
    nom: "Gearlyne Nuñez",
    specialite: "Neuropsychologue",
    telephone: "0470/69.07.88",
    image: photoGearlyne,
    altSEO: "Portrait de Gearlyne Nuñez, neuropsychologue à Péronnes-lez-Binche près de La Louvière",
    lien: "/nos-services/psychologie/neuropsychologie"
  },
  "alessia-dal-bo": {
    nom: "Dr Alessia Dal Bo",
    specialite: "Médecin hypnothérapeute / médecine intégrative",
    telephone: "0497/61.59.03",
    image: photoAlessia,
    altSEO: "Portrait du Dr Alessia Dal Bo, médecin hypnothérapeute et médecine intégrative au Centre Les Oranges",
    lien: "/nos-services/lhypnotherapie"
  },
  "cynthia-viola": {
    nom: "Cynthia Viola",
    specialite: "Conseillère conjugale et familiale",
    telephone: "0497/33.20.95",
    image: photoCynthia,
    altSEO: "Portrait de Cynthia Viola, conseillère conjugale et familiale à Binche et Morlanwelz",
    lien: "/nos-services/sexologie"
  },
  "gwendoline-dhoop": {
    nom: "Gwendoline D'Hoop",
    specialite: "Juriste et médiatrice (familiale, sociale)",
    telephone: "0493/71.17.34",
    image: photoGwendoline,
    altSEO: "Portrait de Gwendoline D'Hoop, juriste et médiatrice familiale et sociale à Péronnes-lez-Binche",
    lien: "/nos-services/psychologie"
  },

  // --- PÔLE BIEN-ÊTRE, NUTRITION & CORPS ---
  "cathy-malosto": {
    nom: "Cathy Malosto",
    specialite: "Sophrologue et massothérapeute",
    telephone: "0475/26.06.51",
    image: photoCathy,
    altSEO: "Portrait de Cathy Malosto, sophrologue et massothérapeute au Centre thérapeutique Les Oranges",
    lien: "/nos-services/sophrologie"
  },
  "clementine-delbruyere": {
    nom: "Clémentine Delbruyère",
    specialite: "Diététicienne nutritionniste",
    telephone: "0471/48.01.18",
    image: photoClementine,
    altSEO: "Portrait de Clémentine Delbruyère, diététicienne nutritionniste à Binche et La Louvière",
    lien: "/nos-services/dietetique"
  },
  "anne-mengeot": {
    nom: "Anne Mengeot",
    specialite: "Naturopathe",
    telephone: "0478/67.05.52",
    image: photoAnne,
    altSEO: "Portrait d'Anne Mengeot, naturopathe au Centre Les Oranges à Péronnes-lez-Binche",
    lien: "/nos-services/naturopathie"
  },

  // --- PÔLE PARAMÉDICAL ---
  "adeline-gomree": {
    nom: "Adeline Gomrée",
    specialite: "Podologue",
    telephone: "0478/04.55.63",
    image: photoAdeline,
    altSEO: "Portrait d'Adeline Gomrée, podologue à Péronnes-lez-Binche",
    lien: "/nos-services/podologie"
  },
  "pauline-horny": {
    nom: "Pauline Horny",
    specialite: "Podologue (remplaçante)",
    telephone: "0478/04.55.63",
    image: photoPauline,
    altSEO: "Portrait de Pauline Horny, podologue au Centre thérapeutique Les Oranges",
    lien: "/nos-services/podologie"
  },
  "aurelie-smeets": {
    nom: "Aurélie Smeets",
    specialite: "Pédicure médicale",
    telephone: "0493/70.69.06",
    image: photoAurelieS,
    altSEO: "Portrait d'Aurélie Smeets, pédicure médicale à Binche près de La Louvière",
    lien: "/nos-services/pedicure-medicale"
  },
  "mathieu-gregoire": {
    nom: "Mathieu Grégoire",
    specialite: "Ostéopathe",
    telephone: "0478/24.48.12",
    image: photoMathieu,
    altSEO: "Portrait de Mathieu Grégoire, ostéopathe D.O. au Centre Les Oranges",
    lien: "/nos-services/osteopathie"
  },
  "elise-vandevoorde": {
    nom: "Elise Vandevoorde",
    specialite: "Psychomotricienne",
    telephone: "0499/60.01.90",
    image: photoElise,
    altSEO: "Portrait d'Elise Vandevoorde, psychomotricienne pour enfants et adultes à Binche",
    lien: "/nos-services/psychomotricite"
  },
  "lydie-junon": {
    nom: "Lydie Jugnon",
    specialite: "Ergothérapeute",
    telephone: "0474/24.91.84",
    image: photoLydie,
    altSEO: "Portrait de Lydie Jugnon, ergothérapeute à Péronnes-lez-Binche",
    lien: "/nos-services/ergotherapie"
  },

  // --- ANIMATEURS ATELIERS ---
  "nathalie-dath": {
    nom: "Nathalie Dath",
    specialite: "Pilates",
    telephone: "0496/53.48.61",
    image: photoNathalie,
    altSEO: "Portrait de Nathalie Dath, instructrice de Pilates à Binche",
    lien: "/nos-services/ateliers"
  },
  "jean-claude-degreef": {
    nom: "Jean-Claude De Greef",
    specialite: "Tai chi / Qi Gong",
    telephone: "0475/71.12.97",
    image: photoJeanClaude,
    altSEO: "Portrait de Jean-Claude De Greef, animateur de Tai chi et Qi Gong à Péronnes-lez-Binche",
    lien: "/nos-services/ateliers"
  },
  "fanny-mesdaght": {
    nom: "Fanny",
    specialite: "Yoga sur chaise",
    telephone: "0476/30.92.80",
    image: photoFanny,
    altSEO: "Portrait de Fanny, professeure de Yoga sur chaise au Centre Les Oranges",
    lien: "/nos-services/ateliers"
  }
};