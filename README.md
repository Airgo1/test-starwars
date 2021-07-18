# StarWars - test front

L'objectif de ce test est :
 - intégrer la page de manière sémantique, en HTML5 suivant les principes du RWD
    
- réaliser un script de parallaxe  (en utilisant l'état de l'art) et l'appliquer à la première section (le logo, le fond et le contenu texte qui suit défilent à des vitesses différentes). 

- Appliquer cet effet de parallaxe sur une autre des sections de la page pour tester que le plugin fonctionne sur plusieurs instances.

- Le menu reste fixe lors du scroll réalisé et le bloc publicitaire de la section 2 (300x600) reste fixe par rapport au viewport lors du scroll tout le long de la section puis s'arrête au bas de la colonne


Le test a été effectué le vendredi 16 juillet 2021 et a duré 12 heures (9 heures de dev le vendredi et 3 heures de fix/relecture le dimanche).

Le développement a été effectué sur les navigateurs firefox, microsoft edge, internet explorer et chrome.

Il y a une petite erreur sur le parralax quand le background est centré. Pour fix  cette erreur, il faudrait lors de la function récupéré la position Y du Background afin de ne plus avoir le décallage présent.

