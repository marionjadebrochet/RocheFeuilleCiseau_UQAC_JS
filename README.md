# Projet dans le cadre de mes études à l'UQAC
<br />

## Réalisation d'une page WEB dynamique en JS qui permet de jouer à Roche Feuille Ciseau
<br />

Le travail demandé est de réaliser ce jeu. La forme et le fond on été défini par le professeur donc la forme est très simpliste. Le but était de se concenter sur le fond. 

### Consignes : 

On trouve dans cette page :

Le titre Roche, papier, ciseaux! tout en haut

Deux boîtes rectangulaires affichant le nom des deux joueurs dans un bandeau coloré, ainsi qu'un (gros) chiffre placé en dessous et indiquant le score actuel du joueur.

À la droite des scores, une boîte rectangulaire où s'affichera le choix de l'ordinateur à chaque tour, ainsi qu'un bandeau coloré en bas servant à afficher un message (dans la maquette, ce message est "En attente de votre choix"

Sous cette boîte, une case à cocher accompagnée du texte Mode triche

Sous tous ces éléments, une boîte rectangulaire intitulée Faites votre choix, contenant trois rectangles avec les images de la roche, du papier et des ciseaux.

Tout à la droite, deux boutons placés l'un sous l'autre: le premier appelé RAZ, et l'autre Changer nom.

La maquette est donnée.
    
### Fonctionnement du jeu

Lors du chargement de la page, les scores sont à zéro et le nom du joueur humain est "Inconnu". La boîte montrant le choix de l'ordinateur est vide et affiche le message "En attente de votre choix". La case "Mode triche" n'est pas cochée.

Lorsque l'utilisateur clique sur l'un des trois symboles de la boîte "Faites votre choix", ce choix est mis en évidence (par exemple, dans la maquette, le rectangle choisi possède une bordure noire plutôt que grise). Le choix de l'ordinateur s'affiche alors immédiatement dans la boîte prévue à cet effet.

Selon les règles du jeu, le message de cette boîte doit être:

    "Vous avez gagné" si le choix du joueur l'emporte sur celui de l'ordinateur
    "J'ai gagné" si le choix de l'ordinateur l'emporte sur celui du joueur
    "Match nul" dans les autres cas

Lorsqu'un des deux joueurs gagne, son score augmente de 1 et se met immédiatement à jour dans la boîte.

Le bouton RAZ signifie "remettre à zéro". Lorsqu'on clique dessus, les scores doivent être remis à zéro.

Le bouton Changer nom doit permettre à l'utilisateur de saisir son nom dans une fenêtre pop-up. Après avoir donné son nom, le nom du joueur doit être mis à jour dans la boîte de score.

### Le choix de l'ordinateur

Le jeu possède deux modes: le mode "normal" et le mode "triche". Ce mode est déterminé par le fait que la case "mode triche" soit cochée ou nom. Activer ou désactiver cette case bascule immédiatement le mode du jeu.

La génération d'un choix pour l'ordinateur est déclenchée par le clic sur l'une des trois images (roche, papier ou ciseaux) par le joueur humain. Dans le mode normal, l'ordinateur effectue son choix de la manière que vous le souhaitez, en autant qu'il ne dépende pas du choix actuel de l'utilisateur. (Le choix peut être fait au hasard, suivre une séquence prédéterminée, ou adopter toute autre technique que vous jugez pertinente. L'important n'est pas de faire un programme qui soit "performant"!) En mode triche au contraire, l'ordinateur choisit toujours l'option qui le fait gagner: ainsi, si le joueur a choisi "roche", l'ordinateur va choisir "papier".
