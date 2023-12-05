import { Component, OnInit } from '@angular/core';
import { Rooms, RoomsList } from './roomsinterface';
import { CommonModule } from '@angular/common';
import { RoomlistComponent } from './roomlist/roomlist.component';
@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule,RoomlistComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit{
  
  hotelname ="Hotel Inventory";
  numberofrooms =10;
  hiderooms =false;
  
  toggle(){
    this.hiderooms = !this.hiderooms
  }
  SelectRoom(room:RoomsList)
  {
    console.log(room);
  }
  room : Rooms=
  {
  availablerooms :10,
  bookedrooms: 5,
  totalrooms:20
  }
  
  roomlist : RoomsList[] = [];
  constructor() {}
  ngOnInit(): void {
   this.roomlist =[
  
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
}
