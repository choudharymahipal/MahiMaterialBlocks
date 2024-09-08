import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardOneScreenComponent } from './dashboard-one-screen/dashboard-one-screen.component';
import { DashboardTwoScreenComponent } from './dashboard-two-screen/dashboard-two-screen.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: '' },
      { path: 'dashboard_one',component:DashboardOneScreenComponent },
      { path: 'dashboard_two',component:DashboardTwoScreenComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
