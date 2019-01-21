import { Component, OnInit, OnChanges } from '@angular/core';
import { Employee } from 'src/app/employee';
import { EmployeeService } from '../employee.service';
import { filter } from 'rxjs/operators';
import { Department } from 'src/app/department.enum';


@Component({
  selector: 'app-pm-table',
  templateUrl: './pm-table.component.html',
  styleUrls: ['./pm-table.component.css']
})
export class PmTableComponent implements OnInit {

  constructor(private pmService: EmployeeService) { }
  pmArray: Array<Employee> = [];
  ngOnInit() {
    console.log(this.pmArray);
    this.pmService.getData()
      .pipe(
        filter(e => e.department.toString()==Department[0])
      )
      .subscribe(res => {
        this.pmArray.push(res)
        console.log('res with filter :::', this.pmArray)
      }
      
      )

  }
  // private projects: Observable<Employee[]>;
  
  // showData() {
  //   console.log(this.pmArray);
  //   this.pmService.getData()
  //     .pipe(
  //       filter(e => e.department.toString()=='PROJECT MANAGER')
  //     )
  //     .subscribe(res => {
  //       this.pmArray.push(res)
  //       console.log('res with filter :::', this.pmArray)
  //     }
      
  //     )

    // this.pmService.showData().subscribe(data => {
    //   this.empArray = data
    //   // console.log(this.empArray);

    //   const source = from(this.empArray);
    //   source
    //   .pipe(
    //     filter(emp => emp.first_name == 'D')
    //     )
    //     .subscribe(res=>{
    //       this.pmArray.push(res);
    //       console.log(res);
    //     });

    //   // console.log(this.pmArray);
    // });
    // this.pmService.showData().subscribe(data => this.empArray = data);
  }


