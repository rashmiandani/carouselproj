import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  //obviously instead of hardcoded list this could hit an endpoint
  slides = [
    {img: "/assets/dog1.jpg"},
    {img: "/assets/dog2.jpg"},
    {img: "/assets/dog3.jpg"},
    {img: "/assets/dog4.jpg"},
    {img: "/assets/dog5.jpg"},
    {img: "/assets/dog6.jpg"},
    {img: "/assets/dog7.jpg"},
    {img: "/assets/dog8.jpg"},
    {img: "/assets/dog9.jpg"},
    {img: "/assets/dog10.jpg"}
  ];

  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 4,
    "autoplay": true,
    "autoplaySpeed" : 5000,
    "pauseOnHover" : true,
    "infinite" : true,
    "responsive" : [
      {
        "breakpoint" : 992,
        "settings" : {
          "arrows" : true,
          "infinite" : true,
          "slidesToShow": 3,
          "slidesToScroll": 3
        }
      },
      {
        "breakpoint" : 768,
        "settings" : {
          "arrows" : true,
          "infinite" : true,
          "slidesToShow": 1,
          "slidesToScroll": 1
        }
      }
    ]
  };

}
