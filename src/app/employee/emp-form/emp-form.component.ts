import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})
export class EmpFormComponent implements OnInit {

  constructor(private EmployeeService: EmployeeService) { }
  emp: Employee = new Employee();
  ngOnInit() {
    console.log(this.emp);
  }
  createEmp() {
    this.EmployeeService.createEmp({ ...this.emp });
    console.log({ ...this.emp});
    console.log('Dept=' + {...this.emp}.department);
  }

  deptArray = [
    {
      dept: 'PROJECTMANAGER'
    },
    {
      dept: 'SOFTWAREDEVELOPER'
    },
    {
      dept: 'MARKETINGMANAGER'
    }
  ];
}
