import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import loginUser from '../files/loginUser.json';
import { LoginService } from './login.service';
import { ActivatedRoute,Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message:String;

 /*directly using JSON start*/
 loginUser:{emailid:String,Password:any}[]=loginUser;
 /*directly using JSON end*/
 //private router=ActivatedRoute;
 users = []
  constructor(private _data:DataserviceService,private _loginService:LoginService,private route:ActivatedRoute,private router:Router) { 
    
  }

  /*directly using JSON start*/
  login(){
    let loginFlag=false;
    let emailId=(document.getElementById("loginId")as HTMLInputElement).value;
    let password=(document.getElementById("loginPassword")as HTMLInputElement).value;
    for (let i = 0; i < loginUser.length; i++) {
      if(loginUser[i].emailId==emailId && loginUser[i].password==password){
          loginFlag=true;
      }
    }
    if(loginFlag){
      alert("logged in");
    }
    else{
      alert("wrong user id or password")
    }
  }
/*directly using JSON end*/

/*directly using JSON start*/
loginService(){
  let loginFlag=false;
  let emailId=(document.getElementById("loginId")as HTMLInputElement).value;
  let password=(document.getElementById("loginPassword")as HTMLInputElement).value;
  for (let i = 0; i < this.users.length; i++) {
    if(this.users[i].emailId==emailId && this.users[i].password==password){
        loginFlag=true;
    }
  }
  if(loginFlag){
    localStorage.setItem('currentUser', JSON.stringify({ emailId: emailId }));
    this.router.navigate(['/dashboard']);
  }
  else{
    alert("wrong user id or password")
  }
}
/*directly using JSON end*/

  ngOnInit(): void {
    localStorage.removeItem('currentUser')
    this._loginService.getUsers()
    .subscribe(data=>{
      this.users=data;
    });
    //this._data.currentMessage.subscribe(message=>this.message=message)
  }


  

}
