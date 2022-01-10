//Angular eingebunden!
import { Component, OnInit } from '@angular/core';

//HTML/SCSS/CSS eingebunden!
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


//Java Script
export class AppComponent implements OnInit{
  images = ['laptop.jpg','codes.jpg','uni.jpg'];

  ngOnInit(){
    this.updateImage();
  }

  updateImage() {
    
  }




}
