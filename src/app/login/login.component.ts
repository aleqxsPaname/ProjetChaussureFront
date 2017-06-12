import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';
import { ServiceModel } from "app/services/model.service";
import { Client } from "app/services/client";

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    client : Client;
      message : string ="";

    constructor(private _authenticationService : AuthenticationService, private _router: Router,private _modelService : ServiceModel){

    }

    ngOnInit(): void { 
      this.client = new Client();
       this._authenticationService.logout();
     
    }

    onConnect(): void {
  
      this._authenticationService.authentification(this.client).subscribe(
      clientConnecte => { 
        if(clientConnecte){
        
          localStorage.setItem("Connecté(e)",JSON.stringify(clientConnecte));
          
        
        
          let link = ['/cart'];
          this._router.navigate( link );
         
         
        }},
        e => { console.log(e.message); 
          this.message="Votre Email ou mot de passe incorrecte!!";
      }
    )
      }
}
