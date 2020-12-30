import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(public fb: FormBuilder, private loginService: LoginService, private router: Router) {
    this.form = this.fb.group({
      usuario: ['', [Validators.required, Validators.minLength(2)] ],
      pass_usuario: ['', [Validators.required, Validators.minLength(2)]]
    });
   }

  ngOnInit() {}

  submitForm(){
    this.loginService.login(this.form.value).subscribe(
      res => {
       sessionStorage.setItem("token", res.toString());
       this.router.navigateByUrl("/personas");
      },
      err => {
        if(err.status == 401 || err.status == 500){
          Swal.fire(
            'Datos incorrectos',
            'Usuario o password incorrectos',
            'error'
          )
        }
      }
    )
  }

}
