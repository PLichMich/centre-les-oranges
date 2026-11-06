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
    '/nos-services/psychologie/psychologie-cognitive-et-comportementale/therapie-cognitivo-comportementale-binche-plichart/': '/nos-services/psychologie/psychologie-cognitive-et-comportementale',
    '/plichart-michael-psychologue-tcc-pour-ados-adultes-et-couples/': '/nos-services/psychologie/psychologie-cognitive-et-comportementale',
    '/nos-services/psychologie/psychologie-cognitive-et-comportementale/plichart-michael-psychologue-tcc-pour-ados-adultes-et-couples/': '/nos-services/psychologie/psychologie-cognitive-et-comportementale',
    '/nos-services/psychologie/psychologie-cognitive-et-comportementale/psychologue-comportementaliste/': '/nos-services/psychologie/psychologie-cognitive-et-comportementale',
    '/mahieux-celine-psychologue-tcc/': '/nos-services/psychologie/psychologie-cognitive-et-comportementale',
    '/nos-services/psychologie/psychologie-cognitive-et-comportementale/mahieux-celine-psychologue-tcc/': '/nos-services/psychologie/psychologie-cognitive-et-comportementale',
    '/nos-services/psychologie/psychologie-cognitive-et-comportementale/mahieux-celine-psychologue-tcc-english-italian/': '/nos-services/psychologie/psychologie-cognitive-et-comportementale',
    '/delbruyere-clementine-dieteticienne-nutritionniste/': '/nos-services/dietetique',
    '/nos-services/dietetique/dubrulle-lea-dieteticienne/': '/nos-services/dietetique',
    '/dubrulle-lea-dieteticienne/': '/nos-services/dietetique',
    '/de-novellis-valeria-osteopathe-generale-pediatrique-grossesse-et-post-partum/': '/nos-services/osteopathie',
    '/osteopathe-d-o/': '/nos-services/osteopathie',
    '/gearlyne-nunez-neuropsychologue-a-binche-centre-les-oranges/': '/nos-services/psychologie/neuropsychologie',
    '/gearlyne-numez-neuropsychologue-a-binche-centre-les-oranges/': '/nos-services/psychologie/neuropsychologie',
    '/gearlyne-numez-neuropsychologue-binche-centre-les-oranges/': '/nos-services/psychologie/neuropsychologie',
    '/gearlyne-nunez-neuropsychologue-binche-centre-les-oranges/': '/nos-services/psychologie/neuropsychologie',

    // 2. LES PRATICIENS INACTIFS / REMPLACÉS
    '/estievenart-melanie-kinesitherapeute/': '/nos-services/kinesitherapeute',
    '/nos-services/kinesitherapeute/estievenart-melanie-kinesitherapeute/': '/nos-services/kinesitherapeute',
    '/nos-services/kinesitherapeute/kinesitherapeute-peronnes-lez-binche/': '/nos-services/kinesitherapeute',
    '/gillet-claudia-kinesitherapeute/': '/nos-services/kinesitherapeute',
    '/nos-services/kinesitherapeute/boudoufte-nabil-kinesitherapeute/': '/nos-services/kinesitherapeute',
    '/nos-services/kinesitherapeute/gillet-claudia-kinesitherapeute/': '/nos-services/kinesitherapeute',
    '/mathys-viviane-logopede/': '/nos-services/logopedie',
    '/nos-services/logopedie/mathys-viviane-logopede/': '/nos-services/logopedie',
    '/nos-services/logopedie/lyse-pingaux-logopede-conventionnee/': '/nos-services/logopedie',
    '/nos-services/ergotherapie/ergotherapeute-olieslaeger-myriam/': '/nos-services/ergotherapie',
    '/pedicure-medicale-marie-helene-guillaume/': '/nos-services/pedicure-medicale',
    '/nos-services/psychologie/virginie-caron-psychologue-specialisee-pour-enfants-et-adolescents/': '/nos-services/psychologie',
    '/virginie-caron-psychologue-specialisee-pour-enfants-et-adolescents/': '/nos-services/psychologie',
    '/nos-services/psychologie/la-therapie-breve/beublet-maxence-psychologue-clinicien-therapie-breve-orientee-solutions/': '/nos-services/psychologie',
    '/nieddu-astrid-psychologue-legale/': '/nos-services/psychologie',
    '/castiaux-melina-psychologue-therapie-breve-et-hypnose/': '/nos-services/psychologie',
    '/nos-services/kinesiologie/lory-soni-kinesiologue-massages-chinois/': '/nos-services/sophrologie',
    '/lory-soni-kinesiologue-massages-chinois/': '/nos-services/sophrologie',
    '/nos-services/kinesiologie/cristina-di-meo-kinesiologue-instructrice-brain-gym/': '/nos-services/sophrologie',
    '/brain-gym/': '/nos-services/sophrologie',
    '/nos-services/kinesiologie/': '/nos-services/sophrologie',

// 3. L'HISTORIQUE WORDPRESS STRUCTUREL
    // --- Les anciennes URL à rallonge corrigées (Dans le bon sens !) ---
    '/bienvenue-sur-le-site-internet-du-centre-therapeutique-les-oranges/le-centre-therapeutique-les-oranges/': '/',
    '/bienvenue-sur-le-site-internet-du-centre-therapeutique-les-oranges/venir-jusqua-nous/': '/contact',
    '/bienvenue-sur-le-site-internet-du-centre-therapeutique-les-oranges/contacter-les-gestionnaires-du-centre/': '/contact',
    '/bienvenue-sur-le-site-internet-du-centre-therapeutique-les-oranges/contacter-les-gestionnaires-du-centre/annuaire/': '/annuaire',
    '/bienvenue-sur-le-site-internet-du-centre-therapeutique-les-oranges/galerie-photo/': '/',
    '/plan-du-site/': '/',
    '/ateliers-pour-enfants-avec-troubles-cognitifs-ou-moteurs/': '/nos-services/ergotherapie/',
    '/author/plichart/': '/',

    // --- Tes liens existants qui étaient parfaits (Conservés) ---
    '/dietetique/': '/nos-services/dietetique/',
    '/psychologie/': '/nos-services/psychologie/',
    '/sexologie/': '/nos-services/sexologie/',
    '/osteopathie/': '/nos-services/osteopathie/',
    '/psychomotricite/': '/nos-services/psychomotricite/',
    '/podologie/': '/nos-services/podologie/',
    '/sophrologie/': '/nos-services/sophrologie/',
    '/logopedie/': '/nos-services/logopedie/',
    '/kinesitherapeute/': '/nos-services/kinesitherapeute/',
    '/ateliers-formations-a-venir/': '/nos-services/ateliers-formations-a-venir/',
    '/psychologie-cognitive-et-comportementale/': '/nos-services/psychologie/psychologie-cognitive-et-comportementale/',
    '/meditation-pleine-conscience/': '/nos-services/psychologie/meditation-pleine-conscience/',
    '/lhypnotherapie/': '/nos-services/lhypnotherapie/',
    '/la-therapie-breve/': '/nos-services/psychologie/la-therapie-breve/',
    '/neuropsychologie/': '/nos-services/psychologie/neuropsychologie/',
    '/emdr-eye-movement-desensitization-and-reprocessing/': '/nos-services/emdr/',
    '/therapie-systemique/': '/nos-services/mediation-familiale/',
    '/nos-services/psychologie/therapie-systemique/': '/nos-services/mediation-familiale/',
    '/offre-demploi-kinesitherapeute-independant/': '/envie-de-rejoindre-notre-equipe/offre-demploi-kinesitherapeute-independant/',
    '/offre-demploi-logopede-independante/': '/envie-de-rejoindre-notre-equipe/offre-demploi-logopede-independante/',
    '/adele-chiengue-sage-femme/': '/',
    '/nos-services/sage-femme-infirmiere/adele-chiengue-sage-femme/': '/',
    '/sage-femme-infirmiere/': '/nos-services/sage-femme-infirmiere/',
    '/nouvelle-psychologue-specialisee-en-systemique-hypnose-et-emdr/': '/',
    // --- NETTOYAGE DES ANCIENNES ACTUALITÉS (Redirection vers l'accueil) ---
    '/les-nouvelles-du-centre/': '/',
    '/ateliers-pour-enfants-avec-troubles-cognitifs-ou-moteurs/': '/nos-services/ergotherapie/',
    '/author/plichart/': '/',
    '/les-nouvelles-du-centre/page/2/': '/',
    '/category/articles-interessants-du-centre-therapeutique-les-oranges/': '/',
    '/category/articles-interessants-du-centre-therapeutique-les-oranges/aide-a-la-parentalite/': '/',
    '/category/articles-interessants-du-centre-therapeutique-les-oranges/page/2/': '/',
    '/actualite-covid-19/': '/',
    '/actualite-post-confinement/': '/',
    '/adaptation-de-nos-services-suite-au-covid-19/': '/',
    '/bonne-rentree-nos-nouveautes/': '/',
    '/nos-nouveautes-pour-la-rentree/': '/',
    '/nos-nouveautes-pour-lautomne/': '/',
    '/petites-nouvelles-de-fin-et-de-debut-dannee/': '/',
    '/bonne-fete-a-toutes-les-mamans/': '/',
    '/seance-dinformation-sur-lallaitement-maternel/': '/',
    '/comprendre-le-stress-et-ses-obstacles-au-changement-avec-les-tcc/': '/',
    '/bientot-des-ateliers-au-centre/': '/',
    '/une-logopede-et-des-ateliers-massages-parents-enfants-et-pilates-pour-bien-debuter-cette-rentree/': '/',
    '/une-sophrologue-et-massotherapeute-a-rejoins-notre-equipe/': '/',
    '/bienvenue-sur-le-site-internet-du-centre-therapeutique-les-oranges/galerie-photo/': '/',
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