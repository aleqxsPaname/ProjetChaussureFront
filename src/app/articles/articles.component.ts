import { ActivatedRoute } from '@angular/router';

import { ServiceModel } from './../services/model.service';
import { ServiceArticle } from './../services/article.service';
import { Article } from './../services/article';
import { Model } from './../services/model';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from "app/services/cart.service";
import { ArticleSelected } from "app/services/articleSelected";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class  ArticlesDetailsComponent implements OnInit {
    
    private artSelected : ArticleSelected;
    private panier : ArticleSelected[];
    private articles: Article[];
    private model: Model;
    // private quantityStock = [];
    private tailles_possible = []; 
    private comments = [];
    private compteur : number; 
    private selectedValue: number = 0;
    private alerting: string[] = [];

    constructor(private _cartService: CartService, // subject
               private _articleService: ServiceArticle, 
               private _modelsService: ServiceModel,
               private _route: ActivatedRoute) {

         this._cartService.panierSubject.subscribe(
           panierSubject => this.panier=panierSubject);  

         this._cartService.compteurSubject.subscribe(
           compteurSubject => this.compteur = compteurSubject);  

    }

   public ngOnInit(): void {


      let Id = this._route.snapshot.params['id'] ;                    
      this._articleService.getArticlesByModel(Id)
                                      .subscribe(
                                          data => {
                                              this.articles = data;
                                              this.initTableTaille();
                                              this.modelInPanier();
                                          }
                                      );  
   };



 // cette fonction permet de traiter les tailles et de renseigner le model
  private initTableTaille(){    
    for(let a of this.articles) {

      this.model = a.model;

            this.tailles_possible.push(a.taille);
         //   this.quantityStock[a.taille]= a.quantite_stock;
            if (a.quantite_stock == 0)
            {
              this.comments[a.taille] = "Indisponible momentanément";
            }
            else if (a.quantite_stock < 3) {
              this.comments[a.taille] = "Reste " + a.quantite_stock + " article(s) en stock";
            }
    } 
  }


  private ajoutPanier() {
      
      let quantite = 0;
      let index = 0;
      let panier = JSON.parse(localStorage.getItem("panier"));
      if (panier){
        for (let lignepanier of panier){ // si l'article est deja dans le panier alors il faut changer la quantité...(1)
            if (this.model.nom_model == lignepanier.nom_model && this.selectedValue == lignepanier.taille){
              quantite = lignepanier.quantity + 1;
              this.panier[index].quantity = quantite; // est ce que cela modifie l'objet ds le panier?
            }
        index++;
        }
      }
      if (quantite ==0) { 
             // (1)...sinon il faut ajouter l'article
            this.artSelected = new ArticleSelected;
            this.artSelected.nom_model = this.model.nom_model;
            this.artSelected.prix = this.model.prix_unitaire;
            this.artSelected.id_article = this.model.id_model;
            this.artSelected.taille = this.selectedValue;
            this.artSelected.quantity = 1;
            this.panier.push(this.artSelected);
      }
      this._cartService.panierSubject.next(this.panier);
      this._cartService.compteurSubject.next(this.compteur + 1);
 }

    modelInPanier(){
        this.panier = JSON.parse(localStorage.getItem("panier"));
        for (let articlePanier of this.panier) {            
                    if (this.model.nom_model == articlePanier.nom_model)
                    {  
                        let v = "(" + articlePanier.taille + ")";
                        let n = this.model.nom_model;
                        if (!this.alerting[n]) {
                            this.alerting[n] = v;
                        } else this.alerting[n] = this.alerting[n] + v
                    }
        }                           
    }              
  
}//FIN

