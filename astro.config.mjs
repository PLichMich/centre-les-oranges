// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  
  // ==========================================
  // REDIRECTIONS SEO (Permanentes 301)
  // Héritées de WordPress + Nouvelles URLs
  // ==========================================
  redirects: {
    // Nouvelles URLs optimisées (Option 2)
    '/nos-services/psychologie/psychologie-cognitive-et-comportementale/therapie-cognitivo-comportementale-binche-plichart/': '/michael-plichart-psychologue-tcc',
    '/plichart-michael-psychologue-tcc-pour-ados-adultes-et-couples/': '/michael-plichart-psychologue-tcc',
    '/nos-services/psychologie/psychologie-cognitive-et-comportementale/plichart-michael-psychologue-tcc-pour-ados-adultes-et-couples/': '/michael-plichart-psychologue-tcc',
    '/nos-services/psychologie/psychologie-cognitive-et-comportementale/psychologue-comportementaliste/': '/michael-plichart-psychologue-tcc',
    
    '/delbruyere-clementine-dieteticienne-nutritionniste/': '/clementine-delbruyere-dieteticienne',
    '/nos-services/dietetique/dubrulle-lea-dieteticienne/': '/clementine-delbruyere-dieteticienne',
    '/dubrulle-lea-dieteticienne/': '/clementine-delbruyere-dieteticienne',

    // Redirections WordPress historiques
    '/le-centre-therapeutique-les-oranges/': '/bienvenue-sur-le-site-internet-du-centre-therapeutique-les-oranges/le-centre-therapeutique-les-oranges/',
    '/venir-jusqua-nous/': '/bienvenue-sur-le-site-internet-du-centre-therapeutique-les-oranges/venir-jusqua-nous/',
    '/contacter-les-gestionnaires-du-centre/': '/bienvenue-sur-le-site-internet-du-centre-therapeutique-les-oranges/contacter-les-gestionnaires-du-centre/',
    '/dietetique/': '/nos-services/dietetique/',
    '/psychologie/': '/nos-services/psychologie/',
    '/sexologie/': '/nos-services/sexologie/',
    '/osteopathie/': '/nos-services/osteopathie/',
    '/psychomotricite/': '/nos-services/psychomotricite/',
    '/podologie/': '/nos-services/podologie/',
    '/ateliers-formations-a-venir/': '/nos-services/ateliers-formations-a-venir/',
    '/vilain-julie-dieteticienne-nutritionniste/': '/nos-services/dietetique/vilain-julie-dieteticienne-nutritionniste/',
    '/psychologie-cognitive-et-comportementale/': '/nos-services/psychologie/psychologie-cognitive-et-comportementale/',
    '/meditation-pleine-conscience/': '/nos-services/psychologie/meditation-pleine-conscience/',
    '/lhypnotherapie/': '/nos-services/psychologie/lhypnotherapie/',
    '/la-therapie-breve/': '/nos-services/psychologie/la-therapie-breve/',
    '/neuropsychologie/': '/nos-services/psychologie/neuropsychologie/',
    '/mahieux-celine-psychologue-tcc/': '/nos-services/psychologie/psychologie-cognitive-et-comportementale/mahieux-celine-psychologue-tcc/',
    '/nos-services/psychologie/psychologie-cognitive-et-comportementale/mahieux-celine-psychologue-tcc-english-italian/': '/nos-services/psychologie/psychologie-cognitive-et-comportementale/mahieux-celine-psychologue-tcc/',
    '/holvoet-aurelie-psychologue-enfants-ados-adultes-familles/': '/nos-services/psychologie/lhypnotherapie/holvoet-aurelie-psychologue-enfants-ados-adultes-familles/',
    '/nos-services/psychologues/lhypnotherapie/holvoet-aurelie-psychologue-enfants-ados-adultes-familles/': '/nos-services/psychologie/lhypnotherapie/psychologue-hypnose/',
    '/wauthia-erika/': '/nos-services/psychologie/neuropsychologie/wauthia-erika/',
    '/deprez-shirley-sexologue/': '/nos-services/sexologie/deprez-shirley-sexologue/',
    '/castelein-claire-osteopathe-generale-sportive-et-perinatale/': '/nos-services/osteopathie/castelein-claire-osteopathe-generale-sportive-et-perinatale/',
    '/nos-services/osteopathie/castelein-claire-osteopathe-generale-sportive-et-perinatale/': '/de-novellis-valeria-osteopathe-generale-pediatrique-grossesse-et-post-partum/',
    '/vandevoorde-elise/': '/nos-services/psychomotricite/vandevoorde-elise/',
    '/nos-services/psychomotricite/vandevoorde-elise/': '/nos-services/psychomotricite/vandevoorde-elise-psychomotricienne/',
    '/podologie-gomree-adeline/': '/nos-services/podologie/podologie-gomree-adeline/',
    '/adele-chiengue-sage-femme/': '/',
    '/nos-services/sage-femme-infirmiere/adele-chiengue-sage-femme/': '/',
    '/sage-femme-infirmiere/': '/nos-services/sage-femme-infirmiere/',
    '/kinesitherapeute/': '/nos-services/kinesitherapeute/',
    '/estievenart-melanie-kinesitherapeute/': '/nos-services/kinesitherapeute/estievenart-melanie-kinesitherapeute/',
    '/nos-services/kinesitherapeute/estievenart-melanie-kinesitherapeute/': '/nos-services/kinesitherapeute/kinesitherapeute-peronnes-lez-binche/',
    '/nos-services/sexologie/deprez-shirley-sexologue/': '/nos-services/sexologie/griffin-alexis-medecin-sexologue/',
    '/soins-infirmiers/': '/nos-services/soins-infirmiers/',
    '/micronutrition/': '/nos-services/nutritionniste/',
    '/nos-services/sexologie/griffin-alexis-medecin-sexologue/': '/nos-services/sexologie/medecin-nutritionniste/',
    '/nos-services/psychologues/': '/nos-services/psychologie/',
    '/nos-services/psychologues/psychologie-cognitive-et-comportementale/psychologue-tcc-anglais/': '/nos-services/psychologie/psychologie-cognitive-et-comportementale/psychologue-tcc/',
    '/nos-services/psychologues/psychologie-cognitive-et-comportementale/mahieux-celine-psychologue-tcc/': '/nos-services/psychologie/psychologie-cognitive-et-comportementale/psychologue-tcc-anglais/',
    '/galerie-photo/': '/bienvenue-sur-le-site-internet-du-centre-therapeutique-les-oranges/galerie-photo/',
    '/emdr-eye-movement-desensitization-and-reprocessing/': '/nos-services/psychologie/emdr-eye-movement-desensitization-and-reprocessing/',
    '/therapie-systemique/': '/nos-services/psychologie/therapie-systemique/',
    '/malosto-cathy-sophrologue-et-massotherapeute/': '/sophrologie/malosto-cathy-sophrologue-et-massotherapeute/',
    '/sophrologie/': '/nos-services/sophrologie/',
    '/nos-services/ergotherapeute/': '/nos-services/ergotherapie/',
    '/gillet-claudia-kinesitherapeute/': '/nos-services/kinesitherapeute/gillet-claudia-kinesitherapeute/',
    '/nos-services/kinesitherapeute/boudoufte-nabil-kinesitherapeute/': '/nos-services/kinesitherapeute/gillet-claudia-kinesitherapeute/',
    '/logopedie/': '/nos-services/logopedie/',
    '/mathys-viviane-logopede/': '/nos-services/logopedie/mathys-viviane-logopede/',
    '/soins-infirmiers-esthetiques/': '/nos-services/soins-infirmiers-esthetiques/',
    '/de-novellis-valeria-osteopathe-generale-pediatrique-grossesse-et-post-partum/': '/osteopathe-d-o/',
    '/nouvelle-professionnelle-docteur-alexis-griffin/': '/nos-services/dietetique/gaelle-bulteel-dieteticienne/',
    '/nos-services/sexologie/medecin-nutritionniste-sexologue/': '/nos-services/sexologie/medecin-nutritionniste/',
    '/nos-services/neurologie/neurologue-docteur-de-wispelaere-francois/': '/nos-services/psychologie/neuropsychologie/',
    '/nos-services/psychologie/therapie-systemique/': '/nos-services/mediation-familiale/',
    '/nouvelle-psychologue-specialisee-en-systemique-hypnose-et-emdr/': '/',
    '/dr-isabelle-janssens-medecin-nutritionniste/': '/nos-services/nutritionniste/dr-isabelle-janssens-medecin-nutritionniste/',
    '/nos-services/sexologie/medecin-nutritionniste/': '/nos-services/nutritionniste/dr-isabelle-janssens-medecin-nutritionniste/',
    '/offre-demploi-kinesitherapeute-independant/': '/envie-de-rejoindre-notre-equipe/offre-demploi-kinesitherapeute-independant/',
    '/offre-demploi-logopede-independante/': '/envie-de-rejoindre-notre-equipe/offre-demploi-logopede-independante/',
    '/nos-services/dietetique/gaelle-bulteel-dieteticienne/': '/nos-services/dietetique/dubrulle-lea-dieteticienne/',
    '/stephanie-germeau-infirmiere-conseil-en-soins-esthetiques/': '/massotherapie-massages-assis/',
    '/virginie-caron-psychologue-specialisee-pour-enfants-et-adolescents/': '/nos-services/psychologie/virginie-caron-psychologue-specialisee-pour-enfants-et-adolescents/',
    '/nos-services/nutritionniste/dr-isabelle-janssens-medecin-nutritionniste/': '/nos-services/dietetique/dubrulle-lea-dieteticienne/',
    '/lory-soni-kinesiologue-massages-chinois/': '/nos-services/kinesiologie/lory-soni-kinesiologue-massages-chinois/',
    '/nos-services/nutritionniste/': '/nos-services/dietetique/dubrulle-lea-dieteticienne/',
    '/valerie-desclez-psychologue-et-coach-en-developpement-personnel/': '/nos-services/psychologie/la-therapie-breve/valerie-desclez-psychologue-et-coach-en-developpement-personnel/',
    '/nos-services/kinesiologie/lory-soni-kinesiologue-massages-chinois/': '/nos-services/kinesiologie/cristina-di-meo-kinesiologue-instructrice-brain-gym/',
    '/brain-gym/': '/nos-services/brain-gym/',
    '/pedicure-medicale-marie-helene-guillaume/': '/nos-services/emilie-ruaut-pedicure-medicale-massotherapeute/',
    '/nos-services/logopedie/mathys-viviane-logopede/': '/nos-services/logopedie/lyse-pingaux-logopede-conventionnee/',
    '/nos-services/ergotherapie/ergotherapeute-olieslaeger-myriam/': '/ergotherapeute-lydie-jugnon/',
    '/nos-services/psychologie/virginie-caron-psychologue-specialisee-pour-enfants-et-adolescents/': '/nos-services/psychologie/',
    '/nos-services/psychologie/la-therapie-breve/beublet-maxence-psychologue-clinicien-therapie-breve-orientee-solutions/': '/nos-services/psychologie/',
    '/nieddu-astrid-psychologue-legale/': '/nos-services/psychologie/',
    '/nos-services/logopedie/lyse-pingaux-logopede-conventionnee/': '/nos-services/logopedie/',
    '/gearlyne-nunez-neuropsychologue-a-binche-centre-les-oranges/': '/gearlyne-numez-neuropsychologue-a-binche-centre-les-oranges/',
    '/gearlyne-numez-neuropsychologue-a-binche-centre-les-oranges/': '/gearlyne-numez-neuropsychologue-binche-centre-les-oranges/',
    '/gearlyne-numez-neuropsychologue-binche-centre-les-oranges/': '/gearlyne-nunez-neuropsychologue-binche-centre-les-oranges/',
    '/castiaux-melina-psychologue-therapie-breve-et-hypnose/': '/nos-services/psychologie/',
    '/nos-services/kinesiologie/': '/nos-services/sophrologie/malosto-cathy-sophrologue-et-massotherapeute/'
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