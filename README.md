# 🏪 Station ZiZ Douae — PWA

Application web installable (Progressive Web App) pour le Contrôle de Gestion de la Station ZiZ Douae.

## 📁 Contenu du dossier

```
ziz-pwa/
├── index.html          ← Ton application (avec balises PWA ajoutées)
├── manifest.json       ← Fiche d'identité de l'app
├── sw.js               ← Service Worker (rend l'app installable)
└── icons/              ← Logo ZiZ en toutes tailles
    ├── logo.svg
    ├── icon-72.png → icon-512.png
    ├── apple-touch-icon.png
    └── favicon-32.png
```

## 🚀 Déploiement gratuit (2 minutes)

### Option A — Netlify (recommandé, le plus simple)

1. Va sur https://app.netlify.com/drop
2. Glisse-dépose le dossier `ziz-pwa` entier dans la zone
3. Netlify te donne une URL type `https://ziz-station-cdg.netlify.app`
4. C'est en ligne ! 🎉

### Option B — Vercel

1. Crée un compte sur https://vercel.com
2. "Add New Project" → upload le dossier
3. URL générée automatiquement

### Option C — GitHub Pages

1. Créer un repo GitHub
2. Push les fichiers
3. Settings → Pages → Deploy from branch `main`

## 📱 Installer sur téléphone

Une fois le site en ligne :

**Android (Chrome) :**
1. Ouvrir l'URL dans Chrome
2. Menu ⋮ → "Ajouter à l'écran d'accueil" ou "Installer l'application"
3. L'icône ZiZ apparaît sur le bureau
4. Clic → app plein écran

**iPhone (Safari) :**
1. Ouvrir l'URL dans Safari
2. Bouton Partage ⬆️ → "Sur l'écran d'accueil"
3. L'icône ZiZ apparaît sur le bureau

## 🖥️ Installer sur PC (Chrome/Edge)

1. Ouvrir le site
2. Icône ⊕ dans la barre d'adresse → "Installer"
3. L'app se lance dans sa propre fenêtre

## ⚙️ Important

- L'app nécessite **une connexion internet** (données sur Supabase cloud)
- Les identifiants Supabase sont déjà dans `index.html`
- Pour mettre à jour : remplace `index.html` et re-déploie

---
Créé pour le PFE d'Ayoub — Contrôle de Gestion, Station ZiZ Douae, Ksar El Kebir
