import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  user!: User
  // isLogin: boolean = false;

  constructor(
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.userService.currentUser().subscribe(res => {
      if (res != null) {
        this.user = res;
        // this.isLogin = true;
      } else {
        this.user = null as any;
        // this.isLogin = false;
      }
    })
  }

}
