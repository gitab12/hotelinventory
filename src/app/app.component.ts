import { Component } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'] ,
    standalone: true,
    imports: [CommonModule,RoomsComponent],
})
export class AppComponent {
  title = 'hotelinventory';
  role = 'admin';
}
