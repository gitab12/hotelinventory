import { Injectable } from '@angular/core';
import { RoomsList } from '../roomsinterface';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomlist : RoomsList[]= [

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

  constructor() { }
  getroomlist()
  {
    return this.roomlist;
  }
}
