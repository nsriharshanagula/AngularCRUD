import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model'
import { Employee } from '../models/employee.model'
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

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
    email: null,
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
  constructor() { 
    this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' })
  }

  ngOnInit() {
    
  }

  saveEmployee(newEmployee: Employee) : void {
    console.log(newEmployee); 
  }

  togglePhotoPreview(){
    this.previewPhoto = this.previewPhoto
  }
}
