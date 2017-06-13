import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from "app/services/cart.service";
import { ArticleSelected } from "app/services/articleSelected";
import { CommandeService } from "app/services/commande.service";
import { Commande } from "app/services/commande";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, AfterViewInit {

  public compteur : number;
  public total: number = 0;
  public articleSelected : ArticleSelected;
  public panier : ArticleSelected[];
  public commande : Commande;

  constructor(private _cartService : CartService, private _commandeService : CommandeService) {

     this._cartService.compteurSubject.subscribe(
          cpt => this.compteur = cpt);

     this._cartService.panierSubject.subscribe(
           panierSubject => this.panier=panierSubject);   

  }

  ngOnInit() {

     this.total = this.calculTotal();
  }

  ngAfterViewInit() {
  }
  
  calculTotal() :number {
        let t = 0;
        let article : ArticleSelected;
        for(article of this.panier){
            console.log("PRIX=" + article.prix);
            t = t + article.prix * article.quantite;
        }
        return t;
    }

  removeItem(item: ArticleSelected){
    let index: number = this.panier.indexOf(item);
    if (index !== -1) { // on verifie que l'article est bien dans le panier
        if (this.panier[index].quantite == 1) {
        this.panier.splice(index,1);
        this._cartService.panierSubject.next(this.panier);
        } else {this.panier[index].quantite --;}
    }  
    this._cartService.compteurSubject.next(this.compteur - 1);
    this.total = this.calculTotal();
  }

  viderPanier() {
    this._cartService.panierSubject.next([]);
    this._cartService.compteurSubject.next(0);
    this.total = 0;
  }
  

  addCommande() {
    this.commande = new Commande();
    this.commande.adresse_livraison = "Essai ajout nouvelle commande";
    this.commande.date = new Date();
    this.commande.idClient = 1;
    this.commande.ligne_de_commande = [{'idArticle':1, 'taille':38, 'prix':0, 'nom_model':"machin", 'quantite':1}];
    // dans java on a ligne_de_commande avec seulement idArticle (un long) et quantite (un int)
    this._commandeService.addCommande(this.commande).subscribe(rep=>console.log("ok"));
  }

}
