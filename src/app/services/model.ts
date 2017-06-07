import { Article } from './article';
export class Model {

id_model : number;
nom_model : string;
description : string;
couleur :string;
prix_unitaire:  number;
modele_image : string ;
// articles : Article[];

constructor(id_model: number = 0 , nom_model: string ="?", description :string ="?",
 couleur:string ="?", prix_unitaire:number = 0 , model_image:string ="?" ){
    this.id_model= id_model;
    this.nom_model= nom_model;
    this.description = description;
    this.couleur = couleur;
    this.prix_unitaire = prix_unitaire;
    this.modele_image;
}
}
