import { Model } from './model';
export class Article {

id_article : number;
taille  : number;
quantite_stock : number;
model: Model;

constructor(id_article: number = 0 , taille: number = 0, quantite_stock = 0){
    this.id_article = id_article;
    this.taille = taille;
    this.quantite_stock = quantite_stock;
   
    
}
}
