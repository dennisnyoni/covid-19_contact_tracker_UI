import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonComponent } from './person/person/person.component';
import { CreatePersonComponent } from './person/create-person/create-person.component';
import { ListPersonComponent } from './person/list-person/list-person.component';
import { PersonDetailsComponent } from './person/person-details/person-details.component';
import { EditPersonComponent } from './person/edit-person/edit-person.component';
import { CreateStatisticComponent } from './statistic/create-statistic/create-statistic.component';
import { EditStatisticComponent } from './statistic/edit-statistic/edit-statistic.component';
import { ListStatisticComponent } from './statistic/list-statistic/list-statistic.component';
import { StatisticListComponent } from './statistic/statistic-list/statistic-list.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { StatisticDetailsComponent } from './statistic/statistic-details/statistic-details.component';
import { HeaderComponent } from './header/header.component';
import { PersonsReportComponent } from './report/persons-report/persons-report.component';
import { StatisticsReportComponent } from './report/statistics-report/statistics-report.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    CreatePersonComponent,
    ListPersonComponent,
    PersonDetailsComponent,
    EditPersonComponent,
    CreateStatisticComponent,
    EditStatisticComponent,
    ListStatisticComponent,
    StatisticListComponent,
    CreateUserComponent,
    ListUserComponent,
    EditUserComponent,
    UserDetailsComponent,
    HeaderComponent,
    PersonsReportComponent,
    StatisticsReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatMenuModule,
    MatPaginatorModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatToolbarModule, 
    ChartsModule
  ],
  entryComponents: [
    CreatePersonComponent,
    EditPersonComponent,
    CreateUserComponent,
    EditUserComponent,
    EditStatisticComponent,
    CreateStatisticComponent,
    StatisticDetailsComponent,
    UserDetailsComponent,
    PersonDetailsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
