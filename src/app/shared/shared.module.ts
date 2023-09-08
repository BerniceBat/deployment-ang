import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandBarComponent } from './command-bar/command-bar.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CommandBarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports:[
    HeaderComponent, CommandBarComponent
  ]
})
export class SharedModule { }
