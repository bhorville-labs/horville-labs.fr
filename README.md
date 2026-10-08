# horville-labs.fr

Laboratoire de développement de — projets, expérimentations et logiciels.

Site statique (HTML5 / CSS / JavaScript vanilla), sans framework ni backend,
sans dépendance externe. Aucune étape de build.

## État du contenu

- **Projets** : Parental Control et Network Inspector sont en développement.
- **Lab Notes** : aucun article publié, contenu à venir (« Coming soon »).
- Les textes restent volontairement honnêtes : rien n'est présenté comme
  terminé, distribué ou disponible.
- Le domaine `onpremsoftware.com` n'est pas encore publié ; le site n'en
  contient qu'un lien neutre.

## Structure

```
/
├── index.html          # Page unique (Hero, Projects, Research, Lab Notes, OnPrem, About)
├── css/
│   └── style.css       # Design « laboratoire » sombre, responsive
├── js/
│   ├── config.js       # Configuration centralisée (liens UI, origine)
│   └── main.js         # Navigation mobile, révélations au scroll, section active
├── assets/
│   ├── og-image.png    # Image Open Graph (1200×630)
│   └── apple-touch-icon.png
├── favicon.svg
├── CNAME               # Domaine personnalisé GitHub Pages (horville-labs.fr)
├── support/            # Fichiers hors ligne (gitignorés) : AGENTS.md, roadmap.txt, briefs
└── README.md
```

## Contenu

1. **Hero** — identité et présentation du laboratoire
2. **Projects** — Parental Control et Network Inspector (en développement)
3. **Research & Experiments** — Network technologies, Local software, Privacy,
   Security, Infrastructure, Automation
4. **Lab Notes** — billets à venir, aucun article publié pour l'instant
5. **The lab & OnPremSoftware** — Labs = atelier d'expérimentation,
   OnPremSoftware = projets logiciels local-first / on-premise
   ([onpremsoftware.com](https://onpremsoftware.com))
6. **About** — lien vers [bhorville-it.fr](https://bhorville-it.fr)

## Faire évoluer le site

**Ajouter un projet** : dupliquer un bloc `<li>` dans la liste
`.project-grid` de `index.html` (titre, statut, description).
Ne jamais afficher « Available now » / « Released » sans statut réel.

**Ajouter une note de lab** : dupliquer un bloc `<li>` dans `.notes-grid`,
retirer le badge « Coming soon » uniquement quand l'article existe.

**Ajouter une page projet / un article** : créer un fichier HTML à la racine
(par ex. `projects/network-inspector.html`) et y faire depuis le listing.

**Changer un lien externe** : mettre à jour `js/config.js` (source de
vérité) puis le `href` de repli dans `index.html` (requis sans JS et pour
le SEO). Voir `support/AGENTS.md`, section « Gestion de configuration ».

## Déploiement (prévu)

Hébergement prévu : **GitHub Pages** (push sur la branche par défaut →
racine du dépôt). Aucun backend nécessaire actuellement.
Le fichier `CNAME` (`horville-labs.fr`) est déjà en place pour le domaine
personnalisé ; la publication effective et la configuration DNS / HTTPS
restent à confirmer — le site n'est pas encore déployé.

## Références

- Domaine : horville-labs.fr
- Projets logiciels local-first / on-premise : [onpremsoftware.com](https://onpremsoftware.com)
- Activité IT : [bhorville-it.fr](https://bhorville-it.fr)
