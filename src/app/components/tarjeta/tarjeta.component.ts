import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { PersonaService } from '../../services/persona-service.service';
import { Persona } from '../../models/persona';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss'],
})
export class TarjetaComponent implements OnInit {

  @Input()
  letraRecibida: string = '';

  personas: Persona[];

  constructor(private personaService: PersonaService, private router: Router) {
    this.getPersonas();
   }

  ngOnInit() {
    
  }

  getPersonas(){
    this.personaService.getPersonas().subscribe(
      res => {
        this.personas = res;
        console.log(this.personas);
      },
      err => {

      }
    )
  }

  validarFecha(date: Date){
    let currentDate: Date = new Date();
    if(currentDate > new Date(date) ){
      return true;
    }
  }

  detalle(idPersona: number){
    this.router.navigateByUrl(`detalle/${idPersona}`);
  }


}
