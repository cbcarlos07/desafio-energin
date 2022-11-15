import { Component, OnInit } from '@angular/core';
import { Dashboard } from './dashboard.model';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  subtitle: string = 'Control panel'
  dashboard: Dashboard
  constructor(private _dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this._dashboardService
        .getDashboard()
        .subscribe((response: Dashboard)=>{
          this.dashboard = response
        })
  }

}
