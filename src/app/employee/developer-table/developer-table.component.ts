import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { filter } from 'rxjs/operators'
import { Employee } from 'src/app/employee';
import { Department } from 'src/app/department.enum';

@Component({
  selector: 'app-developer-table',
  templateUrl: './developer-table.component.html',
  styleUrls: ['./developer-table.component.css']
})
export class DeveloperTableComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }
  dArray: Array<Employee> = [];
  ngOnInit() {
    this.employeeService.getData()
      .pipe(
        filter(e => e.department.toString() == Department[1])
      )
      .subscribe(res => {
        this.dArray.push(res);
        console.log("res of developer:::", this.dArray);

      })
  }
}
