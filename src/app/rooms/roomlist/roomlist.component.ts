import { Component, Input, OnInit } from '@angular/core';
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
  ngOnInit(): void {
    
  }
@Input() roombind : RoomsList[] = []

}
