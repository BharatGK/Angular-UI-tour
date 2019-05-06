import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { JoyrideService } from 'ngx-joyride';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    currentUrl: any = undefined;
    thisInstance: any;
    constructor(public router: Router, private readonly joyrideService: JoyrideService) {
        this.thisInstance = this
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                this.currentUrl = event.url;
                //console.log(this.currentUrl)

                let isUiTourActive = localStorage.getItem("angularTourActivated");
                if (this.currentUrl != '/login' && (!isUiTourActive && isUiTourActive != "active")) {
                    this.uiTourStart();
                    localStorage.setItem("angularTourActivated", "active");
                }
            }
        });
    }

    ngOnInit() {
    }

    uiTourStart() {
        this.joyrideService.startTour(
            { steps: ['home', 'about', 'services', 'logout', 'about-details@about-us'] } // Your steps order
        );
    }
}
