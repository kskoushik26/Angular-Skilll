import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;

  constructor(public formbuilder:FormBuilder,public router: Router) { 
    this.loginForm=this.formbuilder.group({
      userName:new FormControl('',Validators.required),
        password:new FormControl('',Validators.required)
    })
  }

  ngOnInit() {
  }
  login(){
    this.router.navigate(['/home'])
  }

}
