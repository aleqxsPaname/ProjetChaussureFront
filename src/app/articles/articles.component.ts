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
    private listeArticleSelected : ArticleSelected[];
    private articles: Article[];
    private model: Model;
    // private quantityStock = [];
    private tailles_possible = []; 
    private comments = [];
    private compteur : number; 
    private selectedValue: number = 0;

    constructor(private _cartService: CartService, 
               private _articleService: ServiceArticle, 
               private _modelsService: ServiceModel,
               private _route: ActivatedRoute) {

         this._cartService.articleSelectedSubject.subscribe(
           articleSelectedSubject => this.listeArticleSelected=articleSelectedSubject);  

         this._cartService.compteurSubject.subscribe(
           compteurSubject => this.compteur = compteurSubject);  

    }

   public ngOnInit(): void {

   
    // localStorage.removeItem("compteur");



      let Id = this._route.snapshot.params['id'] ;                    
      this._articleService.getArticlesByModel(Id)
                                      .subscribe(
                                          data => {
                                              this.articles = data;
                                           //   this.model = data.models[0];
                                              this.initTableTaille();
                                              this.creationModelUnique();
                                          }
                                      );  



   };



 // cette fonction permet de traiter les tailles et de renseigner le model
  private initTableTaille(){    
    for(let a of this.articles) {

      // Renseigner model
      this.model = new Model;
      this.model = a.model;
      this.model.nom_model = a.model.nom_model;
      this.model.modele_image = a.model.modele_image;
      this.model.description = a.model.description;
       this.model.couleur = a.model.couleur;
      this.model.prix_unitaire = a.model.prix_unitaire;


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

  private creationModelUnique(){
      
  }

  private ajoutPanier() {

  this.artSelected = new ArticleSelected;
  this.artSelected.nom_model = this.articles[0].model.nom_model;
  this.artSelected.prix = this.articles[0].model.prix_unitaire;
  this.artSelected.id_article = this.articles[0].model.id_model;
  this.artSelected.taille = this.selectedValue;
  this.listeArticleSelected.push(this.artSelected);
  this._cartService.articleSelectedSubject.next(this.listeArticleSelected);
    
  this._cartService.compteurSubject.next(this.compteur + 1);
 
 }

  
}//FIN

