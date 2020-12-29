import { Pipe, PipeTransform } from '@angular/core';
import { Persona } from '../models/persona';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(persona: Persona[], input: string): Persona[] {
     if(!persona || ! input){
       return persona;
     }

     return persona.filter(persona => 
      persona.primer_nombre.toLowerCase().indexOf(input.toLowerCase()) !== -1 || 
      persona.dni_persona.toLowerCase().indexOf(input.toLowerCase()) !== -1 ||
      persona.fecha_vencimiento.toString().indexOf(input.toLowerCase()) !== -1 
      )
  }

}
