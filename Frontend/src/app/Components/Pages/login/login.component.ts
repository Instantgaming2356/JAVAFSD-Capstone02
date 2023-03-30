import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup;
  isSubmitted = false;
  returnUrl = '';
  res = 0;

  constructor(private formBuilder : FormBuilder, private userService : UserService, private activatedRoute : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', Validators.required]
    });

    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl']; // Get the latest value. "?returnUrl = /checkout"
  }

  get fc()  {
    return this.loginForm.controls;
  }

  submit()  {
    this.isSubmitted = true;
    if(this.loginForm.invalid) return;
  
    if(this.userService.login(this.fc['email'].value, this.fc['password'].value)) {
      this.router.navigateByUrl('/home');
      //this.router.navigateByUrl('/home');
      //this.res = 1;
    } 
  }

}
