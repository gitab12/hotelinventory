import { Component, OnInit } from '@angular/core';
import { Rooms, RoomsList } from './roomsinterface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {

  
  hotelname ="Hotel Inventory";
  numberofrooms =10;
  hiderooms =false;
  
  toggle(){
    this.hiderooms = !this.hiderooms
  }
  room : Rooms=
  {
  availablerooms :10,
  bookedrooms: 5,
  totalrooms:20
  }
  
  roomlist : RoomsList[] = [
  {
    roomstype: 1,
    checkintime: new Date(),
    checkout:new Date(),
    cost: 1200
  },
  {
    roomstype: 2,
    checkintime: new Date(),
    checkout:new Date(),
    cost: 1300
  }
  
  ]
}
