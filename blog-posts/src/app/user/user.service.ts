import { Injectable } from '@angular/core';
import { UserForAuth } from '../types/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  USER_KEY = '[user]';
  user: UserForAuth | null = null;

  get isLogged(): boolean {
    return !!this.user;
  }


  constructor(private http: HttpClient) {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser)
    } catch (err) {
      this.user = null;
    }
  }

  login(email: string, password: string) {
    this.user = {
      firstName: 'sava',
      email: 'sava@abv.bg',
      phoneNumber: '123-123-123',
      password: '123123',
      id: 'asdasd asd',
    }

    this.http.post<UserForAuth>('/api/login', { email, password })

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }

  logout() {
    this.user = null;
    localStorage.removeItem(this.USER_KEY);
  }

  //TODO Save if the user is authenticated in LocalStorage
}
