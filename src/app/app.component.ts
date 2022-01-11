//Angular eingebunden!
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

//HTML/SCSS/CSS eingebunden!
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


//Java Script
export class AppComponent{
 
  constructor(public router: Router){ }


}


