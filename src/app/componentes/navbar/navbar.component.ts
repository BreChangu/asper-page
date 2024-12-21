import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector:'app-navbar',
  standalone:true,
  imports:[RouterLink],
  templateUrl:'./navbar.component.html',
  styleUrl:'./navbar.component.css'

})

export class NavbarComponent {
  menuActive:boolean = false;
  togleMenu():void{
    this.menuActive= !this.menuActive;
  }

}

