import { Model } from './../services/model';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ServiceModel } from './../services/model.service';
import { ActivatedRoute } from '@angular/router';
import { ArticleSelected } from "app/services/articleSelected";


@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {

    private _http: Http;
    
    private models: Model[] = [];

    private id :number;
    private artSelected : ArticleSelected;
    private listeArticleSelected : ArticleSelected[];
    private alerting : any[] = [];

    constructor(private _modelsService: ServiceModel,private _route: ActivatedRoute) { }

public ngOnInit(): void {
    this._route.params.subscribe(p => {  this.init(); console.log("params changed"); });
    //this.init();
    console.log("ngOnInit " +  + this.id);
}
   public init(): void {
       this.id = this._route.snapshot.params['id'] ; 
        console.log("init  " + this.id);
       
                     if (this.id==0)  
                         this._modelsService.getTousLesModels()
                                            .subscribe(
                                                data => {this.models = data;
                                               console.log(data);
                                               this.modelInPanier();
                                          });
                         

                    else  this.modelpourCategory(this.id);

    }



                         
    modelpourCategory(id) {
            this._modelsService.getTousLesModelsbyCategory(id)
                                .subscribe(
                                      data => {this.models = data;
                                            console.log(data);
                                             this.modelInPanier();
                                        });
    }

    modelInPanier(){
        this.listeArticleSelected = JSON.parse(localStorage.getItem("panier"));
        for (let articlePanier of this.listeArticleSelected) {
             for (let model of this.models) {
                    if (model.nom_model == articlePanier.nom_model)
                    {  
                        let v = "(" + articlePanier.taille + ")";
                        if (!this.alerting[model.nom_model]) {
                            this.alerting[model.nom_model] = v;
                        } else this.alerting[model.nom_model] = this.alerting[model.nom_model] + v
                    }
            }
        }                           
    }               
    

}//dernier

