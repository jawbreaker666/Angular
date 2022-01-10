import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

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

  constructor() { }

  
  }


