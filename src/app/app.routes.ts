import { Routes } from '@angular/router';
import {LoginComponent} from '../components/login/login.component';
import {RegistrationComponent} from '../components/registration/registration.component';
import {HomepageComponent} from '../components/homepage/homepage.component';
import {CarrelloComponent} from '../components/carrello/carrello.component';
import {notLoggedGuard} from '../guardie/not-logged.guard';
import {loggedGuard} from '../guardie/logged.guard';
import {NoPermessiComponent} from '../components/no-permessi/no-permessi.component';

export const routes: Routes = [
  {path:'login',component:LoginComponent,canActivate:[notLoggedGuard]},
  {path:'',component:HomepageComponent},
  {path:'register',component:RegistrationComponent,canActivate:[notLoggedGuard]},
  {path:'cart',component:CarrelloComponent,canActivate:[loggedGuard]},
  {path:'vietato',component:NoPermessiComponent}

];
