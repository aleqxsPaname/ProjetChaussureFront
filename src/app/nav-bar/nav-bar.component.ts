import { Component, OnInit } from '@angular/core';
import { CartService } from "app/services/cart.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public compteur : number;
  constructor(private _cartService : CartService) { }

  ngOnInit() {

     this._cartService.compteurSubject.subscribe(
          cptS => this.compteur = cptS);
    
  }
}


