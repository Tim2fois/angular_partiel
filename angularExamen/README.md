# AngularExamen

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

---

# Examen de la formation Angular

**Lisez bien l'énoncé avant de vous lancer.**

## Introduction

Le guide Michelin a décidé de mettre à jour son application web permettant de gérer les
restaurants visités et leur classement.

Grâce à vos compétences, vous avez été choisis pour effectuer cette tâche.

## Définitions

Un **restaurant** est caractérisé par :
- un identifiant unique (un nombre entier positif)
- Un nom
- Une adresse
- Une liste d'**évaluations**

Une **évaluation** est caractérisée par :

- Le nom de l'évaluateur
- Le commentaire
- le nombre d'étoiles recommandé (0,1,2 ou 3)

## Cahier des charges

L'application doit être constituée comme suit :

- Une page principale :
  - un tableau des **restaurants** avec, pour chaque :
    - son nom
    - son adresse
    - la moyenne du nombre d'étoiles recommandé pour ce restaurant (Si le restaurant n'a pas encore d'évaluation afficher "/" à la place)
    - un bouton permettant d'accéder à sa page de détails
    - les lignes dont le restaurant à un nombre d'étoiles recommandé moyen supérieur à 2 doivent s'afficher en jaune
    - les lignes dont le restaurant à un nombre d'étoiles recommandé moyen inférieur à 1 doivent s'afficher en gris clair
  - un formulaire permettant d'ajouter un **restaurant**
    - Nom : Obligatoire, 1 caractère minimum, 30 maximum
    - Adresse (sur un seul champ) : Obligatoire, 5 caractères minimum, 50 maximum
    - ID : sera généré par l'API en réponse au POST HTTP


- Une page de détail (accessible depuis le tableau décrit précédemment) :
  - le nom du restaurant
  - son adresse
  - la liste de ses évaluations
  - un formulaire permettant d'ajouter une **évaluation** :
    - Nom: Obligatoire, 1 caractère minimum, 30 maximum
    - Commentaire : 255 caractères maximum
    - Nombre d'étoiles recommandé : Obligatoire, la valeur doit être 0, 1, 2 ou 3
  - un formulaire (identique au formulaire d'ajout) permettant d'éditer le restaurant

La liste initiale des **restaurants** doit être chargée via requête HTTP. Chaque changement sur un restaurant doit déclencher une requête HTTP appropriée :
POST pour l'ajout d'un nouveau restaurant, PUT pour une mise à jour (l'ajout d'une évaluation sur un restaurant est une mise à jour).
Vous trouverez à côté de ce readme un fichier de configuration Mockoon qui simule les routes de l'API du guide Michelin.

#### Bonus

En vue d'améliorer la sécurité de son système d'information, le service CyberSecurité voudrait que vous **interceptiez** (ce mot est important) automatiquement toutes les requêtes
HTTP émises par l'application pour y ajouter le header :
```Authorization: SUPER_MOT_DE_PASSE_TOP_SECRET```

## Conseils supplémentaires

- Planifiez bien les tâches que vous devrez faire afin d'organiser au mieux vos dossiers et votre code dès le début.
- Le style de l'application ne sera bien sûr pas noté. Vous serez évalué sur les concepts que vous implémenterez dans votre application, pas sur le CSS.
- Mieux vaut faire peu correctement que beaucoup salement.
- Vous ne faites pas du code seulement pour vous-même mais aussi pour qu'il puisse être compris
  par quelqu'un d'autre, notamment moi.
- Les commentaires expliquant ce que vous faites sont bien sûr les bienvenus.
- Vous avez accès à votre précédent travail et à internet.
- La question bonus est, comme son nom l'indique, un bonus. Ne la faites que si vous avez terminé tout le reste.
