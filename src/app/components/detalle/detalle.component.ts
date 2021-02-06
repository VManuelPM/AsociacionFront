import { Component, OnInit } from "@angular/core";
import { PersonaService } from "../../services/persona-service.service";
import { ActivatedRoute } from "@angular/router";
import { Persona } from '../../models/persona';
import { DetallePagos } from "../../models/detalle-pagos";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import Swal from 'sweetalert2';

@Component({
  selector: "app-detalle",
  templateUrl: "./detalle.component.html",
  styleUrls: ["./detalle.component.scss"],
})
export class DetalleComponent implements OnInit {
  persona: Persona;
  form: FormGroup;
  id: number;

  constructor(
    private personaService: PersonaService,
    private activatedRouter: ActivatedRoute,
    public fb: FormBuilder
  ) {

    this.activatedRouter.params.subscribe((params) => {
      this.id = params["id"];
    });

    this.getPersona(this.id);

    this.form = this.fb.group({
    });
  }

  ngOnInit() {}

  getPersona(idPesona: number) {
    this.personaService.getPersonaById(idPesona).subscribe(
      (res) => {
        console.log("respuesta", res);
        this.persona = res;

        this.form = this.fb.group({
          direccion_residencia: [
            this.persona.direccion_residencia,
            [Validators.required, Validators.minLength(2)],
          ],
          ciudad_residencia: [this.persona.ciudad_residencia, [Validators.required, Validators.minLength(2)]],
          telefono_celular: [this.persona.telefono_celular, [Validators.required, Validators.minLength(2)]],
          profesion: [this.persona.profesion, [Validators.required, Validators.minLength(2)]],
          fecha_vencimiento: [this.persona.fecha_vencimiento],
          valor_pago: ["", [Validators.required, Validators.minLength(2)]],
        });
      },
      (err) => {}
    );
  }

  validarFecha(date: Date) {
    let currentDate: Date = new Date();
    if (currentDate > new Date(date)) {
      return true;
    }
  }

  edit(persona:Persona) {

    let dataEnvio: Persona = {
      id_persona: persona.id_persona,
      dni_persona: persona.dni_persona.trim(),
      primer_nombre: persona.primer_nombre.trim(),
      segundo_nombre: persona.segundo_nombre.trim(),
      primer_apellido: persona.primer_apellido.trim(),
      segundo_apellido: persona.segundo_apellido.trim(),
      fecha_nacimiento: persona.fecha_nacimiento,
      direccion_residencia: this.form.get(["direccion_residencia"]).value,
      ciudad_residencia: this.form.get(["ciudad_residencia"]).value,
      telefono_celular: this.form.get(["telefono_celular"]).value,
      profesion: this.form.get(["profesion"]).value,
      fecha_vinculacion: persona.fecha_vinculacion,
      fecha_vencimiento: this.form.get(["fecha_vencimiento"]).value,
      fecha_salida: persona.fecha_salida,
      detalle_pagos: persona.detalle_pagos,
    };
    
    this.persona = dataEnvio;

    console.log("dataaa" , this.persona);

    this.personaService.putPersona(this.persona).subscribe(
      res => {
        console.log(res);
        Swal.fire(
          'Persona actualizada',
          'actualizada correctamente',
          'success'
        );
       
      }, 
      err =>{
        Swal.fire(
          'Error actualizando',
          'Compruebe los datos y la longitud',
          'error'
        );
      }
    )
   
  }
}
