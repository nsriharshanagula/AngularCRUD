import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model'
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  previewPhoto: false;
  bsConfig: Partial<BsDatepickerConfig>;
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

  saveEmployee(employeeForm: NgForm) : void {
    console.log(employeeForm.value); 
  }

  togglePhotoPreview(){
    this.previewPhoto = this.previewPhoto
  }
}
