import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login-ad',
  templateUrl: './login-ad.component.html',
  styleUrls: ['./login-ad.component.css']
})
export class LoginAdComponent implements OnInit {

  @ViewChild('input') vc: any;
  loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators],
      password: ['', Validators]
    })
  }


  submitForm() {

    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(user => {
      this.router.navigate(["../admin"])
    })
  }
}
