import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  onlogin(userid: any, password: any) {
    if (userid == 'Manish' && password == '1234') {
      sessionStorage.setItem("islogedIn", "true")
    } else {
      sessionStorage.setItem("islogedIn", "false")

    }
  }
}
