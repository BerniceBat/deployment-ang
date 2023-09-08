import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';


const routes: Routes = [
  {
    path: '',
    component: FormComponent,
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserRoutingModule { }
