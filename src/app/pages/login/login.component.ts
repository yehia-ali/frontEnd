import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  iconGoogle: string = '../../../assets/Google.svg';
  loginImage: string = '../../../assets/login.png';
  username: string = "";  
  password: string = "";  
  title = 'auth-guard-demo';  
  constructor(
    private _auth: AuthenticationService,
    private _router: Router,
    private toastr: ToastrService) {  
    if (this._auth.loggedIn) {  
      this._router.navigate(['home']);  
    }  
  }  
  login(): void {  
    if (this.username != '' && this.password != '') {  
      if (this._auth.login(this.username, this.password)) {  
        this.toastr.success('You are successfully logged in');
        this._router.navigate([""]);  
      }  
      else  
      // this.toastr.success('Wrong username or password!');
      this.toastr.error('Wrong username or password','error');

        // alert("Wrong username or password");  
    }  
  }  

}
