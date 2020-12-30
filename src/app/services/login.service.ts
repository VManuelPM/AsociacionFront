import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { DetallePagos } from '../models/detalle-pagos';
import { Observable } from 'rxjs';
import { UsuarioLogin } from '../models/usuario-login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  login(usuarioLogin: UsuarioLogin){
    return this.httpClient.post(`${this.baseUrl}/login/authenticate`, usuarioLogin);
  }
}
