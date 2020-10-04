import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
 private messageSource=new BehaviorSubject<String>("default message");
 currentMessage=this.messageSource.asObservable();
  constructor() { }

  changeMessage(message:String){
    this.messageSource.next(message);
  }
}
