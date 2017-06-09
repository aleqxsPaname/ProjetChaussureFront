import { Model } from './../services/model';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ServiceModel } from './../services/model.service';


@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {

    private _http: Http;
    
    private models: Model[] = [];

    constructor(private _modelsService: ServiceModel) { }

    public ngOnInit(): void {
       
                       this._modelsService.getTousLesModels()
                                      .subscribe(
                                          data => {
                                              this.models = data;
                                          }
                                      );
    }

   

  

}//dernier

