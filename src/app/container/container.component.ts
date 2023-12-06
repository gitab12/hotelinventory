import { AfterContentInit, Component, ContentChild, Host, OnInit } from '@angular/core';
import { EmployeeComponent } from "../employee/employee.component";
import { RoomsService } from '../rooms/service/rooms.service';

@Component({
    selector: 'app-container',
    standalone: true,
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.scss'],
    imports: [EmployeeComponent],
    providers:[RoomsService]
})
export class ContainerComponent implements OnInit,AfterContentInit{
  
  @ContentChild(EmployeeComponent) emp! : EmployeeComponent

  ngAfterContentInit(): void {
   this.emp.employeename ="Geetha"
  }
  constructor(@Host() private roomservie : RoomsService) {}
  ngOnInit(): void {
    
  }

}
