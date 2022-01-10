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
  headlines = ['Coding next Level!','Learning to read codes','Certificate teachers in the universitate'];
  currentImage = 0;
  showImage = true;

  ngOnInit(){
    this.updateImage();
  }

  updateImage() {
    
    setInterval(() => {

    this.currentImage++;
    this.currentImage = this.currentImage % this.images.length;
    this.showImage = false;

    setTimeout(()=>{
      this.showImage = true;
    }, 10);
    }, 8000);
  }
  } 






