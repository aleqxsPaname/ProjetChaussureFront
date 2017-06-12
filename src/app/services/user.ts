
export class User {

id_client : number;
email : string;
mdp : string;
nom :string;
prenom:  string;
adresse : string ;
// articles : Article[];

constructor(id_client: number = 0 , email: string ="?", mdp :string ="?",
 nom:string ="?", adresse:string = "?" , prenom:string ="?" ){
    this.id_client= id_client;
    this.email= email;
    this.mdp = mdp;
    this.nom = nom;
    this.prenom = prenom;
    this.adresse=adresse;
}
}