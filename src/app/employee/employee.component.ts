import { Component, OnInit, Self } from '@angular/core';
import { ContainerComponent } from "../container/container.component";
import { RoomsService } from '../rooms/service/rooms.service';

@Component({
    selector: 'app-employee',
    standalone: true,
    templateUrl: './employee.component.html',
    styleUrl: './employee.component.scss',
    imports: [ContainerComponent],
    // providers: [RoomsService]
})
export class EmployeeComponent implements OnInit{

  employeename : string = "Geetha";
  constructor(private roomservice: RoomsService){}
  ngOnInit(): void {
    
  }

}
