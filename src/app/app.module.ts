import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { EmployeeService } from './employees/employee.service'
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import { CreateEmployeeCanDeavtivateGaurdService } from './employees/create-employee-can-deactivate-gaurd.service';
import { EmployeeDetailsComponent } from './employees/employee-details.component';

  const appRoutes : Routes = [
    {path: 'list', component: ListEmployeesComponent},
    {
      path: 'create', 
      component: CreateEmployeeComponent,
      canDeactivate: [CreateEmployeeCanDeavtivateGaurdService]
    },
    {path: '', redirectTo: '/list', pathMatch: 'full'},
    {path: 'employees/:id', component: EmployeeDetailsComponent},
  ];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent 
    //ConfirmEqualValidatorDirective 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [EmployeeService, CreateEmployeeCanDeavtivateGaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
