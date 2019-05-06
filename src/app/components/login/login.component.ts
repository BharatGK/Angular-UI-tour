import { Component, OnInit } from '@angular/core';
import { JoyrideService } from 'ngx-joyride';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rememberMe: any = false;
  tourEmail: any;
  tourPassword: any;
  constructor(private readonly joyrideService: JoyrideService) { }

  ngOnInit() {
    let isUiTourActive = localStorage.getItem("angularTourActivated");
    if (!isUiTourActive && isUiTourActive != "active")
      this.uiTourStart();

    let rememberMe = localStorage.getItem("UItourRememberMe");
    if (rememberMe && rememberMe == "true") {
      this.rememberMe = true;
      this.tourEmail = "admin@yopmail.com";
      this.tourPassword = "adminPassword";
    }
  }

  uiTourStart() {
    this.joyrideService.startTour(
      { steps: ['sign-in', 'email', 'password', 'remember-me', 'sign-in-submit'] } // Your steps order
    );
  }

  setRememberMe(check) {
    if (check)
      localStorage.setItem("UItourRememberMe", "true");
    else
      localStorage.removeItem("UItourRememberMe");
  }
  signInClick() {
    //localStorage.setItem("angularTourActivated", "active");
  }
}
