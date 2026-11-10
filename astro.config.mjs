// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // URL officielle indispensable pour générer les liens du sitemap
  site: 'https://centrelesoranges.be',

  // Ajout de l'intégration sitemap
  integrations: [
    sitemap()
  ],
  
  // ==========================================
  // REDIRECTIONS SEO (Permanentes 301)
  // Héritées de WordPress + Nouvelles URLs
  // ==========================================
  redirects: {
    // 1. LES PRATICIENS ACTIFS
    '/nos-services/psychologie/psychologie-cognitive-et-comportementale/therapie-cognitivo-comportementale-binche-plichart': '/nos-services/psychologie/psychologie-cognitive-et-comportementale',
    '/plichart-michael-psychologue-tcc-pour-ados-adultes-et-couples': '/nos-services/psychologie/psychologie-cognitive-et-comportementale',
    '/nos-services/psychologie/psychologie-cognitive-et-comportementale/psychologue-comportementaliste': '/nos-services/psychologie/psychologie-cognitive-et-comportementale',
    '/mahieux-celine-psychologue-tcc': '/nos-services/psychologie/psychologie-cognitive-et-comportementale',
    '/nos-services/psychologie/psychologie-cognitive-et-comportementale/mahieux-celine-psychologue-tcc': '/nos-services/psychologie/psychologie-cognitive-et-comportementale',
    '/nos-services/psychologie/psychologie-cognitive-et-comportementale/mahieux-celine-psychologue-tcc-english-italian': '/nos-services/psychologie/psychologie-cognitive-et-comportementale',
    '/delbruyere-clementine-dieteticienne-nutritionniste': '/nos-services/dietetique',
    '/nos-services/dietetique/dubrulle-lea-dieteticienne': '/nos-services/dietetique',
    '/dubrulle-lea-dieteticienne': '/nos-services/dietetique',
    '/de-novellis-valeria-osteopathe-generale-pediatrique-grossesse-et-post-partum': '/nos-services/osteopathie',
    '/osteopathe-d-o': '/nos-services/osteopathie',
    '/gearlyne-nunez-neuropsychologue-a-binche-centre-les-oranges': '/nos-services/psychologie/neuropsychologie',
    '/gearlyne-numez-neuropsychologue-a-binche-centre-les-oranges': '/nos-services/psychologie/neuropsychologie',
    '/gearlyne-numez-neuropsychologue-binche-centre-les-oranges': '/nos-services/psychologie/neuropsychologie',
    '/gearlyne-nunez-neuropsychologue-binche-centre-les-oranges': '/nos-services/psychologie/neuropsychologie',
    '/la-psychologie-legale': '/nos-services/psychologie-legale',
    '/nos-services/psychologie/la-therapie-breve/valerie-desclez-psychologue-et-coach-en-developpement-personnel': '/equipe/valerie-desclez',
    '/valerie-desclez-psychologue-et-coach-en-developpement-personnel': '/equipe/valerie-desclez',
    '/valerie-desclez': '/equipe/valerie-desclez',
    '/nos-services/psychologie/lhypnotherapie/holvoet-aurelie-psychologue-enfants-ados-adultes-familles': '/equipe/aurelie-holvoet',
    '/holvoet-aurelie': '/equipe/aurelie-holvoet',
    '/nos-services/psychomotricite/vandevoorde-elise-psychomotricienne': '/equipe/elise-vandevoorde',
    '/nos-services/psychomotricite/vandevoorde-elise': '/equipe/elise-vandevoorde',
    '/vandevoorde-elise': '/equipe/elise-vandevoorde',
    '/sophrologie/malosto-cathy-sophrologue-et-massotherapeute': '/equipe/cathy-malosto',
    '/nos-services/sophrologie/malosto-cathy-sophrologue-et-massotherapeute': '/equipe/cathy-malosto',
    '/malosto-cathy-sophrologue-et-massotherapeute': '/equipe/cathy-malosto',
    '/nos-services/podologie/podologie-gomree-adeline': '/equipe/adeline-gomree',
    '/nos-services/podologie/gomree-adeline': '/equipe/adeline-gomree',
    '/anne-mengeot': '/equipe/anne-mengeot',
    '/celine-vekeman-neuropsychologue-et-orthopedagogue-clinicienne': '/equipe/celine-vekeman',
    '/cynthia-viola-conseillere-conjugale-et-familiale': '/equipe/cynthia-viola',
    '/daniela-cisamolo-psychologue-therapeute-emdr-pdmy-coach-amoureux-sexologue': '/equipe/daniela-cisamolo',
    '/dr-alessia-dal-bo-medecin-hypnotherapeute-et-aromatherapeute': '/equipe/alessia-dal-bo',
    '/ergotherapeute-lydie-jugnon': '/equipe/lydie-jugnon',
    '/giovanna-trunfio-psychologue': '/equipe/giovanna-trunfio',
    '/gwendoline-dhoop-juriste-et-mediatrice': '/equipe/gwendoline-dhoop',
    '/luana-bernunzo-psychologue-clinicienne-pour-enfants-et-adolescents': '/equipe/luana-bernunzo',
    '/ludik-eva-psychologue-specialisee-en-pleine-conscience-hp-et-douleurs': '/equipe/eva-ludik',

    // 2. LES PRATICIENS INACTIFS / REMPLACÉS
    '/estievenart-melanie-kinesitherapeute': '/nos-services/kinesitherapeute',
    '/nos-services/kinesitherapeute/estievenart-melanie-kinesitherapeute': '/nos-services/kinesitherapeute',
    '/nos-services/kinesitherapeute/kinesitherapeute-peronnes-lez-binche': '/nos-services/kinesitherapeute',
    '/gillet-claudia-kinesitherapeute': '/nos-services/kinesitherapeute',
    '/nos-services/kinesitherapeute/boudoufte-nabil-kinesitherapeute': '/nos-services/kinesitherapeute',
    '/nos-services/kinesitherapeute/gillet-claudia-kinesitherapeute': '/nos-services/kinesitherapeute',
    '/mathys-viviane-logopede': '/nos-services/logopedie',
    '/nos-services/logopedie/mathys-viviane-logopede': '/nos-services/logopedie',
    '/nos-services/logopedie/lyse-pingaux-logopede-conventionnee': '/nos-services/logopedie',
    '/nos-services/ergotherapie/ergotherapeute-olieslaeger-myriam': '/nos-services/ergotherapie',
    '/pedicure-medicale-marie-helene-guillaume': '/nos-services/pedicure-medicale',
    '/nos-services/psychologie/virginie-caron-psychologue-specialisee-pour-enfants-et-adolescents': '/nos-services/psychologie',
    '/virginie-caron-psychologue-specialisee-pour-enfants-et-adolescents': '/nos-services/psychologie',
    '/nos-services/psychologie/la-therapie-breve/beublet-maxence-psychologue-clinicien-therapie-breve-orientee-solutions': '/nos-services/psychologie',
    '/nieddu-astrid-psychologue-legale': '/nos-services/psychologie',
    '/castiaux-melina-psychologue-therapie-breve-et-hypnose': '/nos-services/psychologie',
    '/nos-services/psychologie/neuropsychologie/wauthia-erika': '/nos-services/psychologie',
    '/nos-services/kinesiologie/lory-soni-kinesiologue-massages-chinois': '/nos-services/sophrologie',
    '/lory-soni-kinesiologue-massages-chinois': '/nos-services/sophrologie',
    '/nos-services/kinesiologie/cristina-di-meo-kinesiologue-instructrice-brain-gym': '/nos-services/sophrologie',
    '/brain-gym': '/nos-services/brain-gym',
    '/nos-services/kinesiologie': '/nos-services/sophrologie',
    '/gaelle-bulteel': '/nos-services/dietetique',
    '/nos-services/emilie-ruaut-pedicure-medicale-massotherapeute': '/nos-services/pedicure-medicale',
    '/nos-services/infirmiere': '/centre-de-prelevements',
    '/nos-services/neurologie': '/nos-services/psychologie/neuropsychologie',
    '/nos-services/nutritionniste/dr-isabelle-janssens-medecin-nutritionniste': '/nos-services/dietetique',
    '/nos-services/osteopathie/castelein-claire-osteopathe-generale-sportive-et-perinatale': '/nos-services/osteopathie',
    '/nos-services/sage-femme-infirmiere': '/annuaire',
    '/adele-chiengue-sage-femme': '/',
    '/nos-services/sage-femme-infirmiere/adele-chiengue-sage-femme': '/',
    '/sage-femme-infirmiere': '/annuaire',
    '/nos-services/sexologie/medecin-nutritionniste': '/nos-services/nutritionniste',
    '/nos-services/soins-infirmiers-esthetiques': '/centre-de-prelevements',
    '/stephanie-germeau-infirmiere-conseil-en-soins-esthetiques': '/annuaire',
    '/tis-ludivine-assistante-sociale-et-coach-professionnelle': '/annuaire',
    '/nouvelle-psychologue-specialisee-en-systemique-hypnose-et-emdr': '/',

    // 3. SECTIONS, ATELIERS & RECRUTEMENT
    '/yoga': '/nos-services/ateliers/yoga',
    '/pilates': '/nos-services/ateliers/pilates',
    '/nos-services/kinesitherapeute/pilates': '/nos-services/ateliers/pilates',
    '/nos-services/ateliers-formations-a-venir': '/nos-services/ateliers/ateliers-formations-a-venir',
    '/nos-services/emdr': '/nos-services/psychologie/emdr',
    '/nos-services/lhypnotherapie': '/nos-services/psychologie/lhypnotherapie',
    '/offre-demploi-kinesitherapeute-independant': '/envie-de-rejoindre-notre-equipe/offre-demploi-kinesitherapeute-independant',
    '/offre-demploi-logopede-independante': '/envie-de-rejoindre-notre-equipe/offre-demploi-logopede-independante',
    '/offre-de-collaboration-mediateurtrice-familiale': '/envie-de-rejoindre-notre-equipe/offre-de-collaboration-mediateurtrice-familiale',
    '/therapie-systemique': '/nos-services/mediation-familiale',
    '/nos-services/psychologie/therapie-systemique': '/nos-services/mediation-familiale',
    '/emdr-eye-movement-desensitization-and-reprocessing': '/nos-services/psychologie/emdr',

    // 4. HISTORIQUE WORDPRESS & NAVIGATION
    '/bienvenue-sur-le-site-internet-du-centre-therapeutique-les-oranges/le-centre-therapeutique-les-oranges': '/',
    '/bienvenue-sur-le-site-internet-du-centre-therapeutique-les-oranges/venir-jusqua-nous': '/contact',
    '/bienvenue-sur-le-site-internet-du-centre-therapeutique-les-oranges/contacter-les-gestionnaires-du-centre': '/contact',
    '/bienvenue-sur-le-site-internet-du-centre-therapeutique-les-oranges/galerie-photo': '/',
    '/author/plichart': '/',
    '/centre-de-prelevements-chu-tivoli': '/centre-de-prelevements',
    '/centre-de-prelevements-chu-tivoli-dans-notre-centre': '/centre-de-prelevements',

    // 5. ANCIENNES ACTUALITÉS & ARTICLES
    '/les-nouvelles-du-centre': '/',
    '/ateliers-pour-enfants-avec-troubles-cognitifs-ou-moteurs': '/nos-services/ergotherapie',
    '/les-nouvelles-du-centre/page/2': '/',
    '/category/articles-interessants-du-centre-therapeutique-les-oranges': '/',
    '/category/articles-interessants-du-centre-therapeutique-les-oranges/aide-a-la-parentalite': '/',
    '/category/articles-interessants-du-centre-therapeutique-les-oranges/page/2': '/',
    '/actualite-covid-19': '/',
    '/actualite-post-confinement': '/',
    '/adaptation-de-nos-services-suite-au-covid-19': '/',
    '/bonne-rentree-nos-nouveautes': '/',
    '/nos-nouveautes-pour-la-rentree': '/',
    '/nos-nouveautes-pour-lautomne': '/',
    '/petites-nouvelles-de-fin-et-de-debut-dannee': '/',
    '/bonne-fete-a-toutes-les-mamans': '/',
    '/seance-dinformation-sur-lallaitement-maternel': '/',
    '/comprendre-le-stress-et-ses-obstacles-au-changement-avec-les-tcc': '/',
    '/bientot-des-ateliers-au-centre': '/',
    '/une-logopede-et-des-ateliers-massages-parents-enfants-et-pilates-pour-bien-debuter-cette-rentree': '/',
    '/une-sophrologue-et-massotherapeute-a-rejoins-notre-equipe': '/'
  },

  // ==========================================
  // CONFIGURATION VITE & TAILWIND
  // ==========================================
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        usePolling: true,
        interval: 100
      }
    }
  }
});