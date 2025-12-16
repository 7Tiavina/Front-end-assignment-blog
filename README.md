# Blog Frontend – React + Vite

Ce projet est le frontend d'un mini site de blog développé en React.js avec Vite. 

## Technologies utilisées

- **React.js 19** (Hooks : `useState`, `useEffect`)
- **Vite** comme outil de build et serveur de développement
- **React Router DOM** pour la gestion des routes côté client
- **Fetch API** pour la communication avec le backend
- **CSS** 
- **Backend** : Le projet consomme une API externe (sous Laravel).

## Fonctionnalités

- **Affichage des articles** : Charge et affiche la liste des articles depuis l'API.
- **Navigation** : Permet de naviguer de la liste à la vue détaillée d'un article.
- **Création d'article** : Formulaire pour ajouter un nouvel article avec envoi asynchrone.
- **Suppression d'article** : Possibilité de supprimer un article depuis sa page de détail.
- **Modification d'article** : Formulaire d'édition pré-rempli pour mettre à jour un article.

## Démarrage du projet

### Prérequis

- Node.js (version 18 ou supérieure recommandée)
- `npm` ou un autre gestionnaire de paquets
- Une instance de l'API backend fonctionnelle et accessible (par défaut `http://localhost:8000`).

### Installation et lancement

1.  Clonez le dépôt :
    ```bash
    git clone <https://github.com/7Tiavina/Front-end-assignment-blog.git>
    ```
2.  Accédez au répertoire du projet :
    ```bash
    cd frontend-test-fintrellis
    ```
3.  Installez les dépendances :
    ```bash
    npm install
    ```
4.  Lancez le serveur de développement :
    ```bash
    npm run dev
    ```

L'application sera alors accessible à l'adresse `http://localhost:5173`.

## Scripts disponibles

Dans le projet, vous pouvez exécuter les commandes suivantes :

- `npm run dev`: Lance l'application en mode développement.
- `npm run build`: Compile l'application pour la production dans le dossier `dist`.
- `npm run lint`: Analyse le code source pour trouver et corriger les problèmes de style.
- `npm run preview`: Lance un serveur local pour prévisualiser la version de production.

## Architecture du projet

La structure des fichiers est organisée pour séparer les préoccupations :

```
src/
├── assets/         # Images et autres ressources statiques
├── components/     # Composants React réutilisables (Banner.jsx, PosteCard.jsx...)
├── pages/          # Composants représentant les pages (Home.jsx, PosteDetail.jsx...)
├── styles/         # Fichiers CSS dédiés à chaque composant
├── App.jsx         # Composant racine avec la configuration du routeur
├── main.jsx        # Point d'entrée de l'application
└── App.css         # Styles globaux
```

## Routes


### Backend (API consommée)

- `GET /api/allPostes`: Récupère tous les articles.
- `GET /api/postes/{id}`: Récupère un article par son `id`.
- `POST /api/postes`: Crée un nouvel article.
- `PUT /api/postes/{id}`: Modifie un article existant.
- `DELETE /api/postes/{id}`: Supprime un article.

## Objectifs et bonnes pratiques

- **Code simple et pédagogique** : Le but est de montrer une base de code claire.
- **Découpage en composants** : Le projet est structuré en composants logiques et réutilisables.

