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
          department: 'IT',
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
          department: 'Mech',
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
          department: 'Civil',
          isActive: true,
          photoPath: 'assets/images/mary.png'
        }
      ];

      getEmployees() : Employee[]{
            return this.listEmployees;
      }
}