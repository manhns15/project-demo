import { AfterViewInit, Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit ,AfterViewInit {
  @ViewChild('input') vc: any;

  registerForm! : FormGroup;
  constructor(private fb : FormBuilder, private authService : AuthService, private router : Router, private userService : UserService ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: this.fb.control('', Validators.required),
      email: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required),
    })
  }

  ngAfterViewInit() {            
    this.vc.nativeElement.focus();
  }

  submitForm(){
    this.authService.register(this.registerForm.value.username, this.registerForm.value.email, this.registerForm.value.password).subscribe(user => {
      this.router.navigate(['../'])
    })
  }

}
