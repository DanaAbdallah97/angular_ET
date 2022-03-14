import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Router }       from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  myemail : string = "";
  loginform : FormGroup = new FormGroup({
  email : new FormControl('',[Validators.required,Validators.email]),
  password : new FormControl('',[Validators.required,Validators.minLength(5)])
})
  rememberMe:boolean= true ;
 
public myerror = (controlName:string , errorName : string) => {
  return this.loginform.controls[controlName].hasError(errorName);
  
}




  constructor(private router: Router) {
    this.rememberMe= false;
this.AutoLogin();
   }

  ngOnInit(): void {
  }


  showMessage = false;
  toggleShowMessage() {
  this.showMessage = !this.showMessage;
  }
  submit() {
    // const passwordValue = this.passwordControl.value;
    // console.log(this.emailControl, passwordValue);


          localStorage.setItem("Email", String(this.myemail));
          // localStorage.setItem("password", String(this.passwordControl));
console.log(this.rememberMe.valueOf());
if(this.rememberMe){
  localStorage.setItem("rememberMe", 'yes');
}
this.router.navigate(['/aboutus']);

    }

 AutoLogin(){
        const accessTokenObj = localStorage.getItem("Email");
        // Retrieve rememberMe value from local storage
        const rememberMe = localStorage.getItem('rememberMe');
    console.log(accessTokenObj);
    console.log(rememberMe);
console.log( rememberMe )
        if (rememberMe == 'yes') {
         this.router.navigate(['/home']);
        } else {
          console.log("You need to login");
          console.log(accessTokenObj);
        }
       }
}
