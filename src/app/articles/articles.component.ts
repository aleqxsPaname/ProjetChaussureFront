import { ServiceArticle } from './../services/article.service';
import { Article } from './../services/article';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class  ArticlesDetailsComponent implements OnInit {
    
    
    private articles: Article[] = [];
    
   constructor(private _articleService: ServiceArticle) { }

   public ngOnInit(): void {
         this._articleService.getArticleByid(2)
                                      .subscribe(
                                          data => {
                                              this.articles = data;
                                          }
                                      );
                            }
                     


}


