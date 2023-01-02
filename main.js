/* exercice daily challenge
 */

/* @author :  AKOU JEAN VIVIEN
    @param : taille de la chaine principale
    @param : taille ds sous chaines
    @param : les espaces entres la souschaine la plus grande et la plus petite
    @param : les etoiles
*/



// demande a l'utilisateur d'entrez des mots separer par la virgule.
let mots  = prompt("Entrer plusieurs mots séparés par des virgules");
//divise la chaine en plusieurs sous chaines stocke dans un tableau
const mots_splits = mots.split(",");
console.log(mots_splits);


// Console.log les mots un par ligne, dans un cadre rectangulaire comme indiqué ci-dessous.
function etoile(mots_splits) {
    let taille = 0;//initialisation de la valeur taille 
    let etoile = '';
    let espace = ' ';
    for(let i of mots_splits) {
        if(i.length > taille) { //si la taille du plus grand mot est superieur a O alors taille recois la plus grande valeur
            taille = i.length;
        }
    }
    taille += 4;// nous ajoutons plus 4 a la taille maximale des sous chaines
    for(let i = 1; i <= taille;i++) {
        etoile+='*';
    }
    console.log(etoile);// le nombre d'etoile correspond a  la plus grande taille de la sous chaine a la quelle nous avons ajouter 4
    
    for(let i of mots_splits) {//parcourt toutes les sous chaines 
        if(i.length < (taille-4)) {//pour toutes les sous chaines dont la taille est inferieur a la taille maximale soustrait de 4
            for(let j=0; j<(taille-4-Number(i.length));j++) {
                espace+=' ';
            }
            console.log(`* ${i}${espace}*`);// afiiche le mots en incluant l'espace correspondant a la difference entre la plus grande sous chaine et la chaine elle meme
            espace = ' ';//initialise de nouveau l'espace
        }else {
            console.log(`* ${i} *`);
        }    
    }
    console.log(etoile);
}etoile(mots_splits)

