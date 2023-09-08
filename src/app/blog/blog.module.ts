import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogItemsComponent } from './components/blog-items/blog-items.component';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogFormComponent } from './pages/blog-form/blog-form.component';
import { BlogRoutingModule } from './blog-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    BlogItemsComponent,
    BlogListComponent,
    BlogFormComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule, 
    FormsModule,
    ReactiveFormsModule, HttpClientModule,
   SharedModule
  ]
})
export class BlogModule { }
