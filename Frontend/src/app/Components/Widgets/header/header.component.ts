import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuth = false;

  constructor(private userService: UserService, private router: Router) {
    userService.getAdminObservable().subscribe((res) => {
      this.isAuth = res;
    });
  }

  ngOnInit(): void {
    this.isAuth = false;
  }

  login() {
    //this.isAuth = true;
    this.router.navigateByUrl('');
    //if(this.res)  this.isAuth = true;
  }

  logout()  {
    this.userService.logout();
    this.isAuth = false;
  }

}
