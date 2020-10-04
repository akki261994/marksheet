import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component'
import { DashboardService } from './dashboard/dashboard.service';
import { GraphComponent } from './graph/graph.component';


const APPROUTES: Routes = [
  {path: 'home', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'graph', component: GraphComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(APPROUTES),
  ],
  exports: [RouterModule],
  providers: [LoginService,DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
