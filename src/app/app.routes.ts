import { Routes } from '@angular/router';
import {LoginComponent} from '../components/login/login.component';
import {RegistrationComponent} from '../components/registration/registration.component';
import {HomepageComponent} from '../components/homepage/homepage.component';

export const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:HomepageComponent},
  {path:'register',component:RegistrationComponent},
];
