import {Pipe, PipeTransform} from '@angular/core'; // imports de Pipe et PipeTransform 

@Pipe({ 
    name: 'filterByTaille',
    pure: false  

})

export class TailleCleModel implements PipeTransform{
   
    transform(value: any, ...args: any[]): any { 
       
        let filtre = args[0].toLowerCase(); // resultat en minuscules
        // return tableau à partir de la collection filtrée
        return filtre ? value.filter(produitFiltre => produitFiltre.name.toLowerCase().indexOf(filtre) != -1) : value; // fonction filter() de javascript
    }
}