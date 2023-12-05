import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [CommonModule, RoomsComponent]
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
