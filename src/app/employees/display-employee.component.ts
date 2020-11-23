import { Component, Input, OnInit , OnChanges , SimpleChanges, SimpleChange } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit{
  private _employeeId: number;

  private _employee: Employee;
  
  @Input() 
  set employee(val :Employee){
    console.log('Previous Employee:' +(this._employee ? this._employee.name: 'NULL'));
    console.log('Current: ' + val.name);
    this._employee = val;
  };

  @Input()
  set employeeId(val : number){
    console.log('employeeId changed from:' 
    +JSON.stringify(this._employeeId) + 'to' + JSON.stringify(val));
    this._employeeId = val;
  }

  get employeeId(): number{
    return this._employeeId;
  }

  get employee(): Employee{
    return this._employee;
  }
  constructor() { }

  ngOnInit() {
  }

  // ngOnChanges(changes: SimpleChanges){
  //   for (const propName of Object.keys(changes)){
  //     const change = changes[propName];
  //     const from = JSON.stringify(change.previousValue);
  //     const to = JSON.stringify(change.currentValue);

  //     console.log(propName + 'changed from ' + from + 'to' + to);

  //   }
  // }

}
