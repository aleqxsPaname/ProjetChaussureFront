
// c'est l'article qui va dans le panier (on a simplifie ses attribut/architecture)
export class ArticleSelected {

idArticle : number;
taille  : number;
prix: number;
nom_model: string;
quantite: number;

constructor(id_article: number = 0 , taille: number = 0, prix: number = 0, 
            nom_model: string ="vdefault", quantite: number = 1){
    this.idArticle = id_article;
    this.taille = taille;
    this.prix = prix;
    this.nom_model = nom_model;
    this.quantite = 1;
    
}
}
