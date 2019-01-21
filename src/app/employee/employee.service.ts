import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // empArray:Array<Employee>=[];
  employee: Subject<Employee> = new Subject<Employee>();

  constructor() { }
  createEmp(employeeObject:Employee){
    this.employee.next(employeeObject);
  }
  getData():Subject<Employee>{
    return this.employee;
  }
}
