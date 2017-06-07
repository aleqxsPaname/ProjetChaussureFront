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
    private tableau_tailles = ['12','alex'];
    private test: string = "avant";
  //  id: number;
  //  private sub: any;

   
   constructor(private _articleService: ServiceArticle, private _modelsService: ServiceModel,private _route: ActivatedRoute) {
       
    }

    

   public ngOnInit(): void {


      this.test = "initinit";
       
     //   this.sub = this.route.params.subscribe(params => {
     //   this.id = +params['id'];

      let Id = this._route.snapshot.params['id'] ;                    
      this._articleService.getArticlesByModel(Id)
                                      .subscribe(
                                          data => {
                                              this.articles = data;
                                          }
                                      );

      this.initTableTaille();
   };

  private initTableTaille(){
    this.test = "coucou";
    for(let a of this.articles) {
         //   if (a.quantite_stock >=1)
         //   {
             this.test = this.test + "A";
              this.tableau_tailles.push(a.taille);
         //   }
        }    
    }   
  

}//FIN

