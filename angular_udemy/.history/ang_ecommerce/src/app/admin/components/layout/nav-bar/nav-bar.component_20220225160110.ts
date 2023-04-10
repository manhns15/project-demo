import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  user!: User
  isLogin: boolean = false;

  constructor(
    private userService: UsersService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userService.currentUser().subscribe(res => {
      if (res) {
        this.user = res;
        this.isLogin = true;
        console.log(this.user.username);

      } else {
        this.user = null as any;
        this.isLogin = false;
      }
    })
  }
  logOut() {
    this.authService.logout();
    // this.router.navigate(['login-ad'])
  }
}
