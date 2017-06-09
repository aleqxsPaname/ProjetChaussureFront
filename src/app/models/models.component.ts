import { Model } from './../services/model';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ServiceModel } from './../services/model.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {

    private _http: Http;
    
    private models: Model[] = [];

    private id :number;

    constructor(private _modelsService: ServiceModel,private _route: ActivatedRoute) { }

public ngOnInit(): void {
    this._route.params.subscribe(p => {  this.init(); console.log("params changed"); });
    //this.init();
    console.log("ngOnInit " +  + this.id);
}
   public init(): void {
       this.id = this._route.snapshot.params['id'] ; 
        console.log("init  " + this.id);
       
                     if (this.id==0)  this._modelsService.getTousLesModels()
                                      .subscribe(
                                          data => {
                                              this.models = data;
                                               console.log(data);
                                          }
                                      );
                         

else  this.modelpourCategory(this.id);

                            }



                         
                         modelpourCategory(id)
                         {
                          this._modelsService.getTousLesModelsbyCategory(id)
                                                              .subscribe(
                                                                  data => {
                                                                      this.models = data;
                                                                      console.log(data);
                                                                  }
                                                              );
                                                    }
                        


}//dernier

