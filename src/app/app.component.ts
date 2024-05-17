import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from './app.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  title = 'my-app';

  constructor(private contexts: ChildrenOutletContexts) {}

  getRouteAnimationData() {
    console.log(this.contexts);
    
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
