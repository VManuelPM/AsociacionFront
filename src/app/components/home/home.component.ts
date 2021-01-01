import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  letra: string = "";

  constructor(private router: Router) {}

  ngOnInit() {}

  find(letra: string) {
    this.letra = letra;
  }

  salir() {
    if(sessionStorage.getItem("token")){
      sessionStorage.removeItem("token");
      this.router.navigateByUrl("/login");
    }
  }

  agregar(){
    this.router.navigateByUrl("/agregar");
  }
}
