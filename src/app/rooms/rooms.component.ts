import { ChangeDetectionStrategy,Component, OnInit } from '@angular/core';
import { Rooms, RoomsList } from './roomsinterface';
import { CommonModule } from '@angular/common';
import { RoomlistComponent } from './roomlist/roomlist.component';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, RoomlistComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsComponent implements OnInit {

  hotelname = "Hotel Inventory";
  numberofrooms = 10;
  hiderooms = false;

  toggle() {
    this.hiderooms = !this.hiderooms
  }
  addroom() {
    const room: RoomsList = {
      roomstype: 2,
      checkintime: new Date(),
      checkout: new Date(),
      cost: 1300
    }
   //to add the new record with the existing record (to achive imutablity we use spread operator i.e ... 3dots)
   // below code says that add the new record with and exixting record[...this.roomlist -add the exixting record,room-add the new record with exixting record]
   this.roomlist = [...this.roomlist,room]
   // this.roomlist.push(room);
  }
  SelectRoom(room: RoomsList) {
    console.log(room);
  }
  room: Rooms =
    {
      availablerooms: 10,
      bookedrooms: 5,
      totalrooms: 20
    }

  roomlist: RoomsList[] = [];
  constructor() { }
  ngOnInit(): void {
    this.roomlist = [

      {
        roomstype: 1,
        checkintime: new Date(),
        checkout: new Date(),
        cost: 1200
      },
      {
        roomstype: 2,
        checkintime: new Date(),
        checkout: new Date(),
        cost: 1300
      }
    ]

  }
}
