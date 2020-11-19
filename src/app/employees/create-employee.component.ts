import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model'
import { Employee } from '../models/employee.model'
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { EmployeeService } from './employee.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  previewPhoto: false;
  bsConfig: Partial<BsDatepickerConfig>;
  employee : Employee = {
    id: null,
    name: null,
    gender: null,
    email: '',
    phoneNumber : null,
    contactPreference: null,
    dateOfBirth: null,
    department: null,
    isActive: null,
    photoPath: null,
  }
  departments: Department[] = [
    { id: 1, name: 'Helpdesk'},
    { id: 2, name: 'HR'},
    { id: 3, name: 'IT'},
    { id: 4, name: 'Payroll'}
  ]
  constructor(private _employeeService: EmployeeService,
              private _router : Router) { 
    this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' })
  }

  ngOnInit() {
    
  }

  saveEmployee() : void {
    this._employeeService.save(this.employee);
    this._router.navigate(['list']);
  }

  togglePhotoPreview(){
    this.previewPhoto = this.previewPhoto
  }
}
