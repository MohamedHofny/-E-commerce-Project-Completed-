import { Component } from '@angular/core';
import { Router,RouterModule  } from '@angular/router';
type User = {
  name:string
  age:number
  imgSrc:string
};
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
User:User = {
name:'Mohamed',
age:19,
imgSrc: '/iti.png',
};
getName() {
  return 'Ahmed';
}
hasRedBg: boolean = false;
backgroundColor:string = 'yellow'
router2
constructor(private router:Router){
  this.router2 =router
}

 handleRoute(router:string){

 }
}
