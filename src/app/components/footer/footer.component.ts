import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currentUrl: any = undefined;
  thisInstance: any;
  constructor(public router: Router) {
    this.thisInstance = this
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
        //console.log(this.currentUrl)
      }
    });
  }

  ngOnInit() {
  }

}
