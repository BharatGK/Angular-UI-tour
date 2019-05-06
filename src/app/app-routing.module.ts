import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent, children: [
      { path: 'home', component: HomeComponent }
    ]
  },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'login', component: LoginComponent },
  //{ path: " ", component: HomeComponent },
  { path: "**", redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
