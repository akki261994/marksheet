import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService  {


  private _url='http://localhost:3000/allUserDetails';
  constructor(private http:HttpClient) { }

  getUsers ():Observable<ILogin[]>{
    return  this.http.get<ILogin[]>(this._url);
  }
}
