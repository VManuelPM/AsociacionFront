import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona-service.service';
import { ActivatedRoute } from '@angular/router';
import { Persona } from '../../models/persona';
import { DetallePagos } from '../../models/detalle-pagos';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  persona: Persona;

  constructor(private personaService: PersonaService, private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe(
      params => {
        this.getPersona(params['id']);
      }
    )
   }

  ngOnInit() {
    
  }

  getPersona(idPesona: number){
    this.personaService.getPersonaById(idPesona).subscribe(
      res => {
        console.log("respuesta", res);
        this.persona = res;
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

}
