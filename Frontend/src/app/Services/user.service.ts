import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { sample_users } from 'sample_data';
import { IUserLogin } from '../Interfaces/IUserLogin';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private res: boolean = false;
  private userSubject: BehaviorSubject<boolean> = new BehaviorSubject(this.res);
  
  constructor(private router: Router) { }

  public get currentUser() {
    return this.res;
  }

  login(username: string, password: string): boolean {
    if(username === "user@test.com" && password === "user") {
      this.userSubject.next(!this.res);
      return true;
    }
    return false;
  }

  logout() {
    this.router.navigate(['/']);
  }

  getAdminObservable(): Observable<boolean> {
    return this.userSubject.asObservable();
  }
  
}
