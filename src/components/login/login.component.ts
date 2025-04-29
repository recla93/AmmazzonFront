import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent
{
  username:string= '';
  password:string= '';

  constructor(private auth:AuthService,private router:Router) {
  }

  login()
  {
    this.auth.login({username:this.username,password:this.password}).subscribe
    (
      {
        next:()=>//quando lo status code è di famiglia 200/300 (i buoni)
        {
            this.router.navigate(['/']);
        },
        error:(err)=>//quando lo status code è di famiglia 400/500 (i cattivi)
        {
          alert("Buffone, hai sbagliato i dati");
          this.password = '';
        }
      }
    );
  }
}
