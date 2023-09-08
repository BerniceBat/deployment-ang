import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-items',
  templateUrl: './blog-items.component.html',
  styleUrls: ['./blog-items.component.scss']
})
export class BlogItemsComponent {
  @Input() blog: any;
}
