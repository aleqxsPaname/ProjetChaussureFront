import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from "app/services/cart.service";
import { ArticleSelected } from "app/services/articleSelected";


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
  constructor(private _cartService : CartService) {

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
            t = t + article.prix * article.quantity;
        }
        return t;
    }

  removeItem(item: ArticleSelected){
    let index: number = this.panier.indexOf(item);
    if (index !== -1) { // on verifie que l'article est bien dans le panier
        if (this.panier[index].quantity == 1) {
        this.panier.splice(index,1);
        this._cartService.panierSubject.next(this.panier);
        } else {this.panier[index].quantity --;}
    }  
    this._cartService.compteurSubject.next(this.compteur - 1);
    this.total = this.calculTotal();
  }

  viderPanier() {
    this._cartService.panierSubject.next([]);
    this._cartService.compteurSubject.next(0);
    this.total = 0;
  }

}
