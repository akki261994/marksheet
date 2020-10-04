import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from '../dashboard/dashboard.service';
import { DataserviceService } from '../dataservice.service';
import { Chart } from 'chart.js'


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  currentUser:String;
  marksDetail={}
  LineChart=[]
  constructor(private _data:DataserviceService,private _dashboardData:DashboardService,private route:ActivatedRoute,private router:Router) { }
  back(){
    this.router.navigate(['/dashboard']);
  }
  ngOnInit(): void {

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
