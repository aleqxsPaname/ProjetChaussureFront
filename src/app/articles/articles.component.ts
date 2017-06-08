import { ActivatedRoute } from '@angular/router';

import { ServiceModel } from './../services/model.service';
import { ServiceArticle } from './../services/article.service';
import { Article } from './../services/article';
import { Model } from './../services/model';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class  ArticlesDetailsComponent implements OnInit {
    
    private articles: Article[];
    // private quantityStock = [];
    private tailles_possible = []; 
    private comments = [];

   constructor(private _articleService: ServiceArticle, private _modelsService: ServiceModel,private _route: ActivatedRoute) {
       
    }

   public ngOnInit(): void {

      let Id = this._route.snapshot.params['id'] ;                    
      this._articleService.getArticlesByModel(Id)
                                      .subscribe(
                                          data => {
                                              this.articles = data;
                                              this.initTableTaille(); // VERIFIER SI BONNE PRATIQUE AVEC DIDIER
                                          }
                                      );  
   };

  private initTableTaille(){    
    for(let a of this.articles) {
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
  
}//FIN

