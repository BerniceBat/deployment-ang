import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserRoutingModule } from './user-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
