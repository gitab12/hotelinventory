import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoomsList } from '../roomsinterface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roomlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './roomlist.component.html',
  styleUrl: './roomlist.component.scss'
})

export class RoomlistComponent implements OnInit{
  
@Input() roombind : RoomsList[] = []

@Output() SelectedRoom = new EventEmitter<RoomsList>();

constructor() { }
ngOnInit(): void {
    
}

SelectRoom(room:RoomsList)
{
  console.log(this.SelectedRoom.emit(room))
}
}
