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
  public listeArticleSelected : ArticleSelected[];
  constructor(private _cartService : CartService) {

     this._cartService.compteurSubject.subscribe(
          cpt => this.compteur = cpt);

     this._cartService.articleSelectedSubject.subscribe(
           articleSelectedSubject => this.listeArticleSelected=articleSelectedSubject);   

  }

  ngOnInit() {

     this.total = this.calculTotal();
  }

  ngAfterViewInit() {
  }
  
  calculTotal() :number {
        let t = 0;
        let article : ArticleSelected;
        console.log("LISTEARTICLESELECTED="+this.listeArticleSelected);
        for(article of this.listeArticleSelected){
            console.log("PRIX=" + article.prix);
            t = t + article.prix;
        }
        return t;
    }

  removeItem(item: ArticleSelected){
    let index: number = this.listeArticleSelected.indexOf(item);
    if (index !== -1) {
        this.listeArticleSelected.splice(index,1);
    }  
    this._cartService.compteurSubject.next(this.compteur - 1);
    this.total = this.calculTotal();
  }

  viderPanier() {
    this._cartService.articleSelectedSubject.next([]);
    this._cartService.compteurSubject.next(0);
    this.total = 0;
  }

}
