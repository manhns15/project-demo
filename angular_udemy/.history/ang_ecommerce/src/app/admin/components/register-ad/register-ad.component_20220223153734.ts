import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-ad',
  templateUrl: './register-ad.component.html',
  styleUrls: ['./register-ad.component.css']
})
export class RegisterAdComponent implements OnInit {

  constructor(private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
