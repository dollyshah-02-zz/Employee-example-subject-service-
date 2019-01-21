import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from 'src/app/employee';
import { filter } from 'rxjs/operators';
import { Department } from 'src/app/department.enum';

@Component({
  selector: 'app-marketing-table',
  templateUrl: './marketing-table.component.html',
  styleUrls: ['./marketing-table.component.css']
})
export class MarketingTableComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }
  mArray: Array<Employee> = [];
  ngOnInit() {
    this.employeeService.getData()
      .pipe(filter(e => e.department.toString() == Department[2])
      ).subscribe(res=>
        this.mArray.push(res));
        console.log("res with m::",this.mArray);

  }

}
