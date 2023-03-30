import { Component, Input, OnInit } from '@angular/core';

interface carouselImage {
  imgUrl: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() images: carouselImage[] = []
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 1000;

  selectedIndex = 0;
  
  constructor() { 
  }

  ngOnInit(): void {
    if(this.autoSlide)
      this.autoSlideImages();
  }

  autoSlideImages() {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval)
  }

  selectImage(index: number) {
    this.selectedIndex = index;
  }

  onPrevClick() {
    if(this.selectedIndex == 0)
      this.selectedIndex = this.images.length - 1;
    else  
      this.selectedIndex--;
  }

  onNextClick() {
    if(this.selectedIndex == (this.images.length - 1))
      this.selectedIndex = 0;
    else  
      this.selectedIndex++;
  }

}
