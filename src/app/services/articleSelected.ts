
// c'est l'article qui va dans le panier (on a simplifie ses attribut/architecture)
export class ArticleSelected {

id_article : number;
taille  : number;
prix: number;
// couleur: string;
nom_model: string;
quantity: number;

constructor(id_article: number = 0 , taille: number = 0, prix: number = 0, nom_model: string ="vdefault", quantity: number = 1){
    this.id_article = id_article;
    this.taille = taille;
    this.prix = prix;
    this.nom_model = nom_model;

   
    
}
}
