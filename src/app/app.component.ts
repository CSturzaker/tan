import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare var ga: Function;

@Component({
  selector: 'tan-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Think again now';


  constructor(public router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }
}
