import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from "app/services/client";
import { AuthenticationService } from "app/services/authentication.service";



@Component({
    moduleId: module.id.toString(),
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    client : Client;
    message : String ="";

    constructor(private _authenticationService : AuthenticationService, private _router: Router){

    }

    ngOnInit(): void { 
      this.client = new Client();
      //this.errorMsg = "";
    }

    onSubmit(): void {
       this._authenticationService.inscription(this.client).subscribe(
        usr => {this._router.navigate(['models/0']);  },
                 e => { console.log(e.message); 
                 this.message = "Ko"
                 });
     }
}
