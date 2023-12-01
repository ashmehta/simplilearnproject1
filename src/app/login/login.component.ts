import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  msg : string ="";
  loginRef = new FormGroup({
    emailId: new FormControl(), 
    password: new FormControl()
  });
  constructor(public ls: LoginService, public router : Router) {}

  
  checkLoginDetails(): void{
    let login = this.loginRef.value;
    if(this.ls.checkLoginDetails(login)){
        this.router.navigate(["home"]);
    }else{
        this.msg = "Invalid username or password! Please try again."
    }
    this.loginRef.reset;
  }

}
