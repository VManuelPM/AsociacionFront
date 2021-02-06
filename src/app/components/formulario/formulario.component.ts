import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Persona } from '../../models/persona';
import { PersonaService } from '../../services/persona-service.service';
import Swal from 'sweetalert2'

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.scss"],
})
export class FormularioComponent implements OnInit {
  form: FormGroup;

  constructor(public fb: FormBuilder, private router: Router, private personaService: PersonaService) {
    this.form = this.fb.group({
      dni_persona: ["", [Validators.required, Validators.minLength(2)]],
      primer_nombre: ["", [Validators.required, Validators.minLength(2)]],
      segundo_nombre: ["", [Validators.required, Validators.minLength(2)]],
      primer_apellido: ["", [Validators.required, Validators.minLength(2)]],
      segundo_apellido: ["", [Validators.required, Validators.minLength(2)]],
      fecha_nacimiento: ["", [Validators.required]],
      direccion_residencia: [
        "",
        [Validators.required, Validators.minLength(2)],
      ],
      ciudad_residencia: ["", [Validators.required, Validators.minLength(2)]],
      telefono_celular: ["", [Validators.required, Validators.minLength(2)]],
      profesion: ["", [Validators.required, Validators.minLength(2)]],
      fecha_vinculacion: [new Date()],
      fecha_vencimiento: [new Date()],
      fecha_salida: [new Date()],
      valor_pago: ["", [Validators.required, Validators.minLength(2)]],
    });
  }

  ngOnInit() {}

  add() {
    let dataEnvio: Persona = {
      dni_persona: this.form.get(["dni_persona"]).value,
      primer_nombre: this.form.get(["primer_nombre"]).value,
      segundo_nombre: this.form.get(["segundo_nombre"]).value,
      primer_apellido: this.form.get(["primer_apellido"]).value,
      segundo_apellido: this.form.get(["segundo_apellido"]).value,
      fecha_nacimiento: this.form.get(["fecha_nacimiento"]).value,
      direccion_residencia: this.form.get(["direccion_residencia"]).value,
      ciudad_residencia: this.form.get(["ciudad_residencia"]).value,
      telefono_celular: this.form.get(["telefono_celular"]).value,
      profesion: this.form.get(["profesion"]).value,
      fecha_vinculacion: this.form.get(["fecha_vinculacion"]).value,
      fecha_vencimiento: this.form.get(["fecha_vencimiento"]).value,
      fecha_salida: this.form.get(["fecha_salida"]).value,
      detalle_pagos: [
        {
          valor_pago: this.form.get(["valor_pago"]).value,
          fecha_pago: new Date(),
        },
      ],
    };
    console.log(dataEnvio);
    this.personaService.savePersona(dataEnvio).subscribe( 
      res => {
        Swal.fire(
          'Persona Añadida',
          'Exito añadiendo persona',
          'success'
        );
        this.router.navigateByUrl("/personas");
      },
      err => {
        Swal.fire(
          'Error',
          'El usuario ya existe',
          'error'
        )
      }
    )
    
  }

  atras() {
    this.router.navigateByUrl("/personas");
  }
}
