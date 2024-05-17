import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements AfterViewInit {
  active = 'top';

  ngAfterViewInit() {
    const progressBars = document.querySelectorAll('.progress .progress-bar');
    progressBars.forEach((progressBar: Element) => {
      const ariaValueNow = progressBar.getAttribute("aria-valuenow");
      if (ariaValueNow) {
        progressBar.setAttribute('style', `width: ${ariaValueNow}%`);
      }
    });
    
  }
  
}
