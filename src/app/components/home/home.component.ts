import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  letra: string = '';

  constructor() { }

  ngOnInit() {}

  find(letra: string){
    this.letra = letra;
}


}
