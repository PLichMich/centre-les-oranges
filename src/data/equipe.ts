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
  facebook?: string; 
  actif?: boolean;
  conventionne?: boolean;
  lienPratique?: string;
  texteLienPratique?: string;
}

export const equipeData: Record<string, MembreEquipe> = {
  // --- PÔLE PSYCHOLOGIE & MENTAL ---
  "michael-plichart": {
    nom: "Michaël Plichart",
    specialite: "Psychologue Cognitivo-Comportementaliste",
    telephone: "0486/26.19.79",
    image: photoMichael,
    altSEO: "Portrait de Michaël Plichart, psychologue cognitivo-comportementaliste (TCC) à Péronnes-lez-Binche",
    lien: "/equipe/michael-plichart",
    lienPratique: "/nos-services/psychologie/psychologie-cognitive-et-comportementale",
    texteLienPratique: "la psychologie cognitivo-comportementale",
    actif: true,
    conventionne: true
  },
  "celine-mahieu": {
    nom: "Céline Mahieu",
    specialite: "Psychologue Cognitivo-Comportementaliste",
    telephone: "0492/16.48.18",
    image: photoCeline,
    altSEO: "Portrait de Céline Mahieu, psychologue clinicienne TCC pour adultes et couples à Binche et La Louvière",
    lien: "/equipe/celine-mahieu",
    lienPratique: "/nos-services/psychologie/psychologie-cognitive-et-comportementale",
    texteLienPratique: "la psychologie cognitivo-comportementale",
    facebook: "https://www.facebook.com/Céline-Mahieu-psychologue-clinicienne-103152374422927/",
    actif: true,
    conventionne: false
  },
  "aurelie-holvoet": {
    nom: "Aurélie Holvoet",
    specialite: "Psychologue Thérapie brève & Hypnose",
    telephone: "",
    image: photoAurelieH,
    altSEO: "Portrait d'Aurélie Holvoet, psychologue spécialisée en thérapie brève orientée solutions et hypnose au Centre Les Oranges",
    lien: "/equipe/aurelie-holvoet",
    lienPratique: "/nos-services/psychologie/la-therapie-breve",
    texteLienPratique: "la thérapie brève orientée solutions",
    facebook: "https://www.facebook.com/psychologue.therapie.breve.hypnose/",
    actif: true,
    conventionne: true
  },
  "daniela-cisamolo": {
    nom: "Daniela Cisamolo",
    specialite: "Psychologue, Thérapeute EMDR, Sexologue & Coach amoureux",
    telephone: "0476/89.11.58",
    image: photoDaniela,
    altSEO: "Portrait de Daniela Cisamolo, psychologue, thérapeute EMDR et sexologue à Péronnes-lez-Binche",
    lien: "/equipe/daniela-cisamolo",
    lienPratique: "/nos-services/psychologie/emdr",
    texteLienPratique: "l'EMDR",
    facebook: "https://www.facebook.com/lamour.dans.tous.ses.debats",
    actif: true,
    conventionne: true
  },
  "luana-bernunzo": {
    nom: "Luana Bernunzo",
    specialite: "Psychologue pour enfants, adolescents et jeunes adultes",
    telephone: "",
    image: photoLuana,
    altSEO: "Portrait de Luana Bernunzo, psychologue clinicienne pour enfants et adolescents dans la région de Binche",
    lien: "/equipe/luana-bernunzo",
    lienPratique: "/nos-services/psychologie",
    texteLienPratique: "la psychologie",
    facebook: "https://www.facebook.com/profile.php?id=100075624230136",
    actif: true,
    conventionne: true
  },
  "eva-ludik": {
    nom: "Eva Ludik",
    specialite: "Psychologue clinicienne & Instructrice Pleine conscience",
    telephone: "0474/62.95.84",
    image: photoEva,
    altSEO: "Portrait d'Eva Ludik, psychologue clinicienne et instructrice en méditation pleine conscience à Binche",
    lien: "/equipe/eva-ludik",
    lienPratique: "/nos-services/psychologie/meditation-pleine-conscience",
    texteLienPratique: "la méditation de pleine conscience",
    actif: true,
    conventionne: true
  },
  "giovanna-trunfio": {
    nom: "Giovanna Trunfio",
    specialite: "Psychologue pour enfants, adolescents et adultes",
    telephone: "0494/23.89.15",
    image: photoGiovanna,
    altSEO: "Portrait de Giovanna Trunfio, psychologue pour enfants, adolescents et adultes, thérapie EMDR à Binche",
    lien: "/equipe/giovanna-trunfio",
    lienPratique: "/nos-services/psychologie",
    texteLienPratique: "la psychologie",
    actif: true,
    conventionne: false
  },
  "celine-vekeman": {
    nom: "Céline Vekeman",
    specialite: "Neuropsychologue et Orthopédagogue Clinicienne",
    telephone: "0495/36.67.98",
    image: photoCelineV,
    altSEO: "Portrait de Céline Vekeman, neuropsychologue et orthopédagogue clinicienne au Centre Les Oranges",
    lien: "/equipe/celine-vekeman",
    lienPratique: "/nos-services/psychologie/neuropsychologie",
    texteLienPratique: "la neuropsychologie",
    actif: true,
    conventionne: true
  },
  "valerie-desclez": {
    nom: "Valérie Desclez",
    specialite: "Psychologue en thérapie brève et Coach en développement personnel",
    telephone: "0485/72.23.21",
    image: photoValerie,
    altSEO: "Portrait de Valérie Desclez, psychologue en thérapie brève et coach en développement personnel à Binche",
    lien: "/equipe/valerie-desclez",
    lienPratique: "/nos-services/psychologie/la-therapie-breve",
    texteLienPratique: "la thérapie brève orientée solutions",
    facebook: "https://www.facebook.com/Projetdevieformationscoaching",
    actif: true,
    conventionne: false
  },
  "gearlyne-nunez": {
    nom: "Gearlyne Nuñez",
    specialite: "Neuropsychologue",
    telephone: "0470/69.07.88",
    image: photoGearlyne,
    altSEO: "Portrait de Gearlyne Nuñez, neuropsychologue à Péronnes-lez-Binche près de La Louvière",
    lien: "/equipe/gearlyne-nunez",
    lienPratique: "/nos-services/psychologie/neuropsychologie",
    texteLienPratique: "la neuropsychologie",
    actif: true,
    conventionne: false
  },
  "alessia-dal-bo": {
    nom: "Dr Alessia Dal Bo",
    specialite: "Médecin hypnothérapeute / médecine intégrative",
    telephone: "0497/61.59.03",
    image: photoAlessia,
    altSEO: "Portrait du Dr Alessia Dal Bo, médecin hypnothérapeute et médecine intégrative au Centre Les Oranges",
    lien: "/equipe/alessia-dal-bo",
    lienPratique: "/nos-services/psychologie/lhypnotherapie",
    texteLienPratique: "l'hypnothérapie",
    facebook: "https://www.facebook.com/D%CA%80-D%E1%B4%80%CA%9F-B%E1%B4%8F-A%CA%9F%E1%B4%87ss%C9%AA%E1%B4%80-M%E1%B4%87%CC%81%E1%B4%85%E1%B4%87%E1%B4%84%C9%AA%C9%B4%E1%B4%87-I%C9%B4%E1%B4%9B%E1%B4%87%CC%81%C9%A2%CA%80%E1%B4%80%E1%B4%9B%C9%AA%E1%B4%A0%E1%B4%87-108516065081391",
    actif: true,
    conventionne: false
  },
  "cynthia-viola": {
    nom: "Cynthia Viola",
    specialite: "Conseillère conjugale et familiale",
    telephone: "0497/33.20.95",
    image: photoCynthia, 
    altSEO: "Portrait de Cynthia Viola, conseillère conjugale et familiale à Binche",
    lien: "/equipe/cynthia-viola",
    lienPratique: "/nos-services",
    texteLienPratique: "le conseil conjugal et familial",
    actif: true,
    conventionne: false
  },
  "gwendoline-dhoop": {
    nom: "Gwendoline D'Hoop",
    specialite: "Juriste et médiatrice (familiale, sociale)",
    telephone: "0493/71.17.34",
    image: photoGwendoline,
    altSEO: "Portrait de Gwendoline D'Hoop, juriste et médiatrice familiale et sociale à Péronnes-lez-Binche",
    lien: "/equipe/gwendoline-dhoop",
    lienPratique: "/nos-services/mediation-familiale",
    texteLienPratique: "la médiation familiale",
    actif: true,
    conventionne: false
  },

  // --- PÔLE BIEN-ÊTRE, NUTRITION & CORPS ---
  "cathy-malosto": {
    nom: "Cathy Malosto",
    specialite: "Sophrologue et massothérapeute",
    telephone: "0475/26.06.51",
    image: photoCathy,
    altSEO: "Portrait de Cathy Malosto, sophrologue et massothérapeute au Centre thérapeutique Les Oranges",
    lien: "/equipe/cathy-malosto",
    lienPratique: "/nos-services/sophrologie",
    texteLienPratique: "la sophrologie",
    facebook: "https://www.facebook.com/search/top/?q=cathy%20malosto",
    actif: true,
    conventionne: false
  },
  "clementine-delbruyere": {
    nom: "Clémentine Delbruyère",
    specialite: "Diététicienne nutritionniste",
    telephone: "0471/48.01.18",
    image: photoClementine,
    altSEO: "Portrait de Clémentine Delbruyère, diététicienne nutritionniste à Binche et La Louvière",
    lien: "/nos-services/dietetique",
    lienPratique: "/nos-services/dietetique",
    texteLienPratique: "la diététique",
    facebook: "https://www.facebook.com/profile.php?id=61553616805659&locale=fr_FR",
    actif: true,
    conventionne: false
  },
  "anne-mengeot": {
    nom: "Anne Mengeot",
    specialite: "Naturopathe",
    telephone: "0478/67.05.52",
    image: photoAnne,
    altSEO: "Portrait d'Anne Mengeot, naturopathe au Centre Les Oranges à Péronnes-lez-Binche",
    lien: "/equipe/anne-mengeot",
    lienPratique: "/nos-services/naturopathie",
    texteLienPratique: "la naturopathie",
    actif: true,
    conventionne: false
  },

  // --- PÔLE PARAMÉDICAL ---
  "adeline-gomree": {
    nom: "Adeline Gomrée",
    specialite: "Podologue",
    telephone: "0478/04.55.63",
    image: photoAdeline,
    altSEO: "Portrait d'Adeline Gomrée, podologue à Péronnes-lez-Binche",
    lien: "/equipe/adeline-gomree",
    lienPratique: "/nos-services/podologie",
    texteLienPratique: "la podologie",
    facebook: "https://www.facebook.com/pages/category/Health-Beauty/Pédicure-Podologue-Gomrée-Adeline-114336296697134/",
    actif: true,
    conventionne: false
  },
  "pauline-horny": {
    nom: "Pauline Horny",
    specialite: "Podologue (remplaçante)",
    telephone: "0478/04.55.63",
    image: photoPauline,
    altSEO: "Portrait de Pauline Horny, podologue au Centre thérapeutique Les Oranges",
    lien: "/nos-services/podologie",
    lienPratique: "/nos-services/podologie",
    texteLienPratique: "la podologie",
    actif: true,
    conventionne: false
  },
  "aurelie-smeets": {
    nom: "Aurélie Smeets",
    specialite: "Pédicure médicale",
    telephone: "0493/70.69.06",
    image: photoAurelieS,
    altSEO: "Portrait d'Aurélie Smeets, pédicure médicale à Binche près de La Louvière",
    lien: "/nos-services/pedicure-medicale",
    lienPratique: "/nos-services/pedicure-medicale",
    texteLienPratique: "la pédicure médicale",
    facebook: "https://www.facebook.com/profile.php?id=100093959983345&locale=fr_FR",
    actif: true,
    conventionne: false
  },
  "mathieu-gregoire": {
    nom: "Mathieu Grégoire",
    specialite: "Ostéopathe",
    telephone: "0478/24.48.12",
    image: photoMathieu,
    altSEO: "Portrait de Mathieu Grégoire, ostéopathe D.O. au Centre Les Oranges",
    lien: "/nos-services/osteopathie",
    lienPratique: "/nos-services/osteopathie",
    texteLienPratique: "l'ostéopathie",
    actif: true,
    conventionne: false
  },
  "elise-vandevoorde": {
    nom: "Elise Vandevoorde",
    specialite: "Psychomotricienne",
    telephone: "0499/60.01.90",
    image: photoElise,
    altSEO: "Portrait d'Elise Vandevoorde, psychomotricienne pour enfants et adultes à Binche",
    lien: "/equipe/elise-vandevoorde",
    lienPratique: "/nos-services/psychomotricite",
    texteLienPratique: "la psychomotricité",
    actif: true,
    conventionne: false
  },
  "lydie-junon": {
    nom: "Lydie Jugnon",
    specialite: "Ergothérapeute",
    telephone: "0474/24.91.84",
    image: photoLydie,
    altSEO: "Portrait de Lydie Jugnon, ergothérapeute à Péronnes-lez-Binche",
    lien: "/equipe/lydie-jugnon",
    lienPratique: "/nos-services/ergotherapie",
    texteLienPratique: "l'ergothérapie",
    actif: true,
    conventionne: false
  },

  // --- ANIMATEURS ATELIERS ---
  "nathalie-dath": {
    nom: "Nathalie Dath",
    specialite: "Pilates",
    telephone: "0496/53.48.61",
    image: photoNathalie,
    altSEO: "Portrait de Nathalie Dath, instructrice de Pilates à Binche",
    lien: "/nos-services/ateliers/pilates",
    lienPratique: "/nos-services/ateliers/pilates",
    texteLienPratique: "nos ateliers",
    actif: true,
    conventionne: false
  },
  "jean-claude-degreef": {
    nom: "Jean-Claude De Greef",
    specialite: "Tai chi / Qi Gong",
    telephone: "0475/71.12.97",
    image: photoJeanClaude,
    altSEO: "Portrait de Jean-Claude De Greef, animateur de Tai chi et Qi Gong à Péronnes-lez-Binche",
    lien: "/nos-services/ateliers/ateliers-formations-a-venir",
    lienPratique: "/nos-services/ateliers/ateliers-formations-a-venir",
    texteLienPratique: "nos ateliers",
    actif: true,
    conventionne: false
  },
  "fanny-mesdaght": {
    nom: "Fanny",
    specialite: "Yoga sur chaise",
    telephone: "0476/30.92.80",
    image: photoFanny,
    altSEO: "Portrait de Fanny, professeure de Yoga sur chaise au Centre Les Oranges",
    lien: "/nos-services/ateliers/yoga",
    lienPratique: "/nos-services/ateliers/yoga",
    texteLienPratique: "nos ateliers",
    actif: true,
    conventionne: false
  }
};