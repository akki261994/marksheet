import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDashboard } from './dashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private _url='http://localhost:3000/marksDetail'
  constructor(private http:HttpClient) { }

  getMarksDetail():Observable<IDashboard[]>{
    return  this.http.get<IDashboard[]>(this._url);
  }
}
