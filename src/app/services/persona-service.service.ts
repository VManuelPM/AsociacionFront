import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getPersonas(){
    return this.http.get<Persona[]>(`${this.baseUrl}/personas`);
  }

  getPersonaById(idPersona: number){
    return this.http.get<Persona>(`${this.baseUrl}/personas/${idPersona}`);
  }

  savePersona(persona: Persona){
    return this.http.post(`${this.baseUrl}/Persona`, persona);
  }

  putPersona(persona: Persona){
    console.log(persona.id_persona);
    return this.http.put(`${this.baseUrl}/personas/${persona.id_persona}`, persona);
  }
}
