# Un Pokedex en Svelte

Notre application permet de: 
- Regarder les informations sur les pokémons.
- Enregistrer vos pokémons capturés en cliquant la pokeball sur le pokémon. La liste est enregistré dans le localstorage.
- Parler avec le célèbre Sasha du Bourg Palette dans une messagerie !

L'application fait du Server Side Rendering (SSR) et du Client Side Rendering (CSR).
La première fois qu'on visite le site, le code inclus dans les tags <script> sont exécutés sur le serveur. Par contre, les prochaines visites de pages sont exécutés sur le client.

## Démarrer le projet sur votre ordinateur

Cloner le dépôt avec git clone

Télécharger le dossier d'images: https://mega.nz/file/0sV0zZjA#BYSUHOXVmtW4lS8jIjrngLJT9K45u-cytM5V0o5cTig

Extraire le rar et placer le dossier images dans le dossier static situé à la racine du projet. Cela doit ressembler à ça: static/images/{nom_image.png}.

```bash
# installer les dépendences
npm install

# Démarrer l'application:
npm run dev
```

Note: Pour profiter des fonctionnalités du chatbot, il faut démarrer l'API.
