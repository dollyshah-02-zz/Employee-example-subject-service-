import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PmTableComponent } from './pm-table/pm-table.component';
import { EmpFormComponent } from './emp-form/emp-form.component';
import { DeveloperTableComponent } from './developer-table/developer-table.component';
import { MarketingTableComponent } from './marketing-table/marketing-table.component';
import{ FormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations:[PmTableComponent, EmpFormComponent, DeveloperTableComponent, MarketingTableComponent],
  exports:[PmTableComponent, EmpFormComponent, DeveloperTableComponent, MarketingTableComponent]
})
export class EmployeeModule { }
