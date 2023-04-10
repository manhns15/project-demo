import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-ad',
  templateUrl: './register-ad.component.html',
  styleUrls: ['./register-ad.component.css']
})
export class RegisterAdComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  // backLogin(){
  //   this.router.navigateByUrl()
  // }

}
