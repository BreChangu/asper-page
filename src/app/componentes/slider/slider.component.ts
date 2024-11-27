import { Component, AfterViewInit } from '@angular/core';
import jQuery from 'jquery';
import 'slick-carousel';

@Component({
  selector: 'app-slider',
  standalone: true,
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.initializeSlick();
  }

  initializeSlick(): void {
    const $slider = jQuery('.slideshow .slider').first();
    const maxItems = jQuery('.item', $slider).length;
    let dragging = false;
    let tracking: number | undefined;
    let rightTracking: number | undefined;

    const $sliderRight = jQuery('.slideshow')
      .clone()
      .addClass('slideshow-right')
      .appendTo(jQuery('.split-slideshow'));

    const rightItems = jQuery('.item', $sliderRight).toArray() as HTMLElement[];
    const reverseItems = rightItems.reverse();
    jQuery('.slider', $sliderRight).html('');
    for (let i = 0; i < maxItems; i++) {
      jQuery(reverseItems[i]).appendTo(jQuery('.slider', $sliderRight));
    }

    $slider.addClass('slideshow-left');
    (jQuery('.slideshow-left') as any).slick({
      vertical: true,
      verticalSwiping: true,
      arrows: false,
      infinite: true,
      dots: true,
      speed: 1000,
      cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
    })
    .on('beforeChange', (event: any, slick: any, currentSlide: number, nextSlide: number) => {
      if (currentSlide > nextSlide && nextSlide === 0 && currentSlide === maxItems - 1) {
        (jQuery('.slideshow-right .slider') as any).slick('slickGoTo', -1);
        (jQuery('.slideshow-text') as any).slick('slickGoTo', maxItems);
      } else if (currentSlide < nextSlide && currentSlide === 0 && nextSlide === maxItems - 1) {
        (jQuery('.slideshow-right .slider') as any).slick('slickGoTo', maxItems);
        (jQuery('.slideshow-text') as any).slick('slickGoTo', -1);
      } else {
        (jQuery('.slideshow-right .slider') as any).slick('slickGoTo', maxItems - 1 - nextSlide);
        (jQuery('.slideshow-text') as any).slick('slickGoTo', nextSlide);
      }
    })
    .on('mousewheel', (event: any) => {
      event.preventDefault();
      if (event.deltaX > 0 || event.deltaY < 0) {
        (jQuery('.slideshow-left') as any).slick('slickNext');
      } else if (event.deltaX < 0 || event.deltaY > 0) {
        (jQuery('.slideshow-left') as any).slick('slickPrev');
      }
    })
    .on('mousedown touchstart', () => {
      dragging = true;
      tracking = parseInt(jQuery('.slick-track', $slider).css('transform').split(',')[5], 10);
      rightTracking = parseInt(jQuery('.slideshow-right .slick-track').css('transform').split(',')[5], 10);
    })
    .on('mousemove touchmove', () => {
      if (dragging) {
        const newTracking = parseInt(jQuery('.slideshow-left .slick-track').css('transform').split(',')[5], 10);
        const diffTracking = newTracking - (tracking as number);
        jQuery('.slideshow-right .slick-track').css('transform', `matrix(1, 0, 0, 1, 0, ${rightTracking! - diffTracking})`);
      }
    })
    .on('mouseleave touchend mouseup', () => {
      dragging = false;
    });

    (jQuery('.slideshow-right .slider') as any).slick({
      swipe: false,
      vertical: true,
      arrows: false,
      infinite: true,
      speed: 950,
      cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
      initialSlide: maxItems - 1
    });

    (jQuery('.slideshow-text') as any).slick({
      swipe: false,
      vertical: true,
      arrows: false,
      infinite: true,
      speed: 900,
      cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
    });
  }
}
