import { Component, OnInit } from '@angular/core';
import { EmployeeComponent } from "../employee/employee.component";

@Component({
    selector: 'app-container',
    standalone: true,
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.scss'],
    imports: [EmployeeComponent]
})
export class ContainerComponent implements OnInit{
  ngOnInit(): void {
    
  }

}
