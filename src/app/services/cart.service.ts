import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject, Subscriber} from 'rxjs';
import { Article } from "app/services/article";
import { ArticleSelected } from "app/services/articleSelected";

@Injectable()
export class CartService { 

    public panier: ArticleSelected[] = [];              

    public panierSubject :BehaviorSubject<ArticleSelected[]>
              = new BehaviorSubject([]);

    public compteurSubject :BehaviorSubject<number>
             = new BehaviorSubject(0);  

    constructor() { 

  

    //    VERSION REFACTORE POUR ETRE PLUS SIMPLE A COMPRENDRE 
        console.log("LOCALSTORAGE = " + localStorage.getItem("compteur"));
        if(!localStorage.getItem("compteur")) {
            console.log("Initialisation du local Storage a zero");
            localStorage.setItem("compteur",'0');
        }
        // initialisation de la valeur compteurSubject via le next, on lui affect la valeur qu'il y a ds le local storage
        this.compteurSubject.next(+localStorage.getItem("compteur"));
        // Affectation ds le local storage de la valeur dans le subject
    //    localStorage.setItem("compteur",this.compteurSubject.toString());
        this.compteurSubject.subscribe(b=>localStorage.setItem("compteur",b.toString()))


        // POUR LE TABLEAU DE PRODUIT
        // --------------------------
        let contenu_panier_storage : string = localStorage.getItem("panier");
        console.log("LOCALSTORAGE PANIER = " + contenu_panier_storage);
       /* if(!localStorage.getItem("panier")) {
            console.log("Initialisation du panier a zero");
            let t = this.panier;
            localStorage.setItem("panier",JSON.stringify(t));
        }*/
        if(contenu_panier_storage){
             this.panierSubject.next(JSON.parse(localStorage.getItem("panier")));
        }
        this.panierSubject.subscribe(b=>localStorage.setItem("panier",JSON.stringify(b)));
    }   
}

   




