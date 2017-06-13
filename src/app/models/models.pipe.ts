

import {Pipe, PipeTransform} from '@angular/core'; 
import { Model } from './../services/model';

@Pipe({ 
    name: 'categorieFilter',
    pure: false  

})

export class FilterPipe implements PipeTransform{
   
    transform(listeModeles: Model[], nomMod: string): Model[] { 
       
        let filtre = nomMod;
        
        return filtre ? listeModeles.filter(m => m.nom_model.toLowerCase().indexOf(filtre) != -1) : listeModeles; 
        
    }
}
// import { Model } from './../services/model';
// import {Pipe, PipeTransform} from '@angular/core';

//     @Pipe({ name: 'filter' })


// export class FilterPipe implements PipeTransform {
//     transform(value :any, ...args:any[]) :any{
//     return value.filter(model => model.nom_model);
//   }
// }