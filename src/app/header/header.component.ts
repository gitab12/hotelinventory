import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  title1 : string = ' '
  constructor() {

  }
  ngOnInit(): void {
    
  }

}
