
import { ArticleSelected } from "app/services/articleSelected";
export class Commande {

id_commande : number;
date : any;
adresse_livraison : string;
idClient : number;
ligne_de_commande:  ArticleSelected[];

constructor(id_commande: number = 0 , date: any = new Date(), adresse_livraison :string ="?",
             idClient:number = 1 , ligne_de_commande:ArticleSelected[] = [] ){
    this.id_commande= 0;
    this.date= new Date();
    this.adresse_livraison = "adresse inconnue";
    this.idClient = 1;
    this.ligne_de_commande = [];
    }
}
