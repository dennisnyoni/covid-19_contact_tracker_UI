import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUserComponent } from './user/list-user/list-user.component';
import { ListPersonComponent } from './person/list-person/list-person.component';
import { ListStatisticComponent } from './statistic/list-statistic/list-statistic.component';
import { PersonsReportComponent } from './report/persons-report/persons-report.component';
import { StatisticsReportComponent } from './report/statistics-report/statistics-report.component';


const routes: Routes = [

  

  {path: '',redirectTo: 'persons', pathMatch: 'full'},
  {path: 'persons', component: ListPersonComponent },

  {path: '',redirectTo: 'statistics', pathMatch: 'full'},
  {path: 'statistics', component: ListStatisticComponent },

  {path: '',redirectTo: 'persons_report', pathMatch: 'full'},
  {path: 'persons_report', component: PersonsReportComponent },

  {path: '',redirectTo: 'statistics_report', pathMatch: 'full'},
  {path: 'statistics_report', component: StatisticsReportComponent },
  /*
  { path: '', component: EmployeeComponent,canActivate:[AuthGaurdService] },
  { path: 'addemployee', component: AddEmployeeComponent,canActivate:[AuthGaurdService]},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
