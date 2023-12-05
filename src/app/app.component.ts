import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from "./employee/employee.component";
//import { AppModule } from './app.module';

@Component({
    selector: 'app-root',
    //template: '<app-container></app-container>',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [CommonModule, RoomsComponent, ContainerComponent, EmployeeComponent]
})
export class AppComponent implements AfterViewInit {
  
  
  title = 'hotelinventory';
  role = 'admin';

  @ViewChild('user', { read: ViewContainerRef })
  vcr!: ViewContainerRef;

  ngAfterViewInit(){
    const compref = this.vcr.createComponent(RoomsComponent);
    
  }
}
