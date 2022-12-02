import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  public signOut():void {
    window.sessionStorage.clear();
  }

  // saveToken
  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  // getToken
  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  // saveUser
  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, user);
  }

  // getUser
  public getUser(): string | null {
    return window.sessionStorage.getItem(USER_KEY);
  }

}
