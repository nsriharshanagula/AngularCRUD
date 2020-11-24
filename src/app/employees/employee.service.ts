import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable()
export class EmployeeService{
    private listEmployees : Employee[] = [
        {
          id: 1,
          name: 'Mark',
          gender: 'Male',
          contactPreference: 'email',
          email: 'asdf@sf.com',
          dateOfBirth: new Date('11/2/20'),
          department: '3',
          isActive: true,
          photoPath: 'assets/images/john.png'
        },
        {
          id: 2,
          name: 'Joe',
          gender: 'FeMale',
          contactPreference: 'email',
          email: 'Joe@sf.com',
          dateOfBirth: new Date('11/3/20'),
          department: '2',
          isActive: true,
          photoPath: 'assets/images/mark.png'
        },
        {
          id: 1,
          name: 'France',
          gender: 'Male',
          contactPreference: 'email',
          email: 'France@sf.com',
          dateOfBirth: new Date('11/4/20'),
          department: '1',
          isActive: true,
          photoPath: 'assets/images/mary.png'
        }
      ];

      getEmployees() : Employee[]{
            return this.listEmployees;
      }

      getEmployee(id: number) : Employee{
        return this.listEmployees.find(e => e.id === id);
  }

      save(employee: Employee){
        this.listEmployees.push(employee);
      }
}