import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  // declarations: [
  //   ContainerComponent
  // ],

  imports: [
    CommonModule,
    BrowserModule
    //,RoomsComponent
  ],
 providers: [],
 bootstrap: [AppModule]
})
export class AppModule { }
