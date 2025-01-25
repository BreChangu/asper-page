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
  toggleMenu():void{
    this.menuActive= !this.menuActive;
    console.log('Menu Active:', this.menuActive);
    const navLinksElement = document.querySelector('.nav-links');
  if (navLinksElement) {
    console.log('Classes:', navLinksElement.classList);
  }
}
closeMenu(): void {
  this.menuActive = false;
  console.log('Closing menu:', this.menuActive);
}

}




