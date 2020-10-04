import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';
import { DashboardService } from './dashboard.service';
import { Chart } from 'chart.js'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser:String;
  marksDetail={}
  LineChart=[]
  wish:String;
  result:String;
  grade:String;
color:String;

  constructor(private _data:DataserviceService,private _dashboardData:DashboardService,private route:ActivatedRoute,private router:Router) { }

  logout(){
    this.router.navigate(['/']);
  }
  graph(){
    this.router.navigate(['/graph']);
  }
  ngOnInit(): void {
    //this._data.currentMessage.subscribe(message=>this.message=message)
    var maths;
    var physics;
    var chemistry;
    this.currentUser=JSON.parse(localStorage.getItem('currentUser')).emailId;
    this._dashboardData.getMarksDetail()
    .subscribe(data=>{
      for(let i=0;i<data.length;i++){
        if(data[i].emailId==this.currentUser){
          this.marksDetail=data[i];
          maths=data[i].maths;
          physics=data[i].Physics;
          chemistry=data[i].Chemistry;
          
        }
        if(maths>35 && physics>35 && chemistry>35){
          this.wish="Congratulations!!"
          this.result="Successful"
        }
        else if(maths<35 || physics<35 || chemistry<35){
          this.wish="I am sorry,"
          this.result="Unsuccessful"
          this.grade="F"
          this.color="red"
        }

        if((maths+physics+chemistry)/3>85 && (maths>35 && physics>35 && chemistry>35)){
          this.grade="A+"
          this.color="green"
        }

        else if((maths+physics+chemistry)/3>75 && (maths>35 && physics>35 && chemistry>35)){
          this.grade="A"
          this.color="green"
        }
        else if((maths+physics+chemistry)/3>65 && (maths>35 && physics>35 && chemistry>35)){
          this.grade="B+"
          this.color="green"
        }
        else if((maths+physics+chemistry)/3>60 && (maths>35 && physics>35 && chemistry>35)){
          this.grade="B"
          this.color="green"
        }
        else if((maths+physics+chemistry)/3>45 && (maths>35 && physics>35 && chemistry>35)){
          this.grade="c+"
          this.color="green"
        }
        else if((maths+physics+chemistry)/3>35 && (maths>35 && physics>35 && chemistry>35)){
          this.grade="C"
          this.color="green"
        }
        else if((maths+physics+chemistry)/3==35 && (maths>35 && physics>35 && chemistry>35)){
          this.grade="P"
          this.color="green"
        }

      }
      /*start */


      var myChart = new Chart('lineChart', {
        type: 'bar',
        data: {
            labels: ['maths', 'physics', 'chemistry'],
            datasets: [{
                label: 'marks in exam',
                data: [maths,physics ,chemistry ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'/*,
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'*/
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'/*,
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'*/
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

      /*End */

    });
  }

}
