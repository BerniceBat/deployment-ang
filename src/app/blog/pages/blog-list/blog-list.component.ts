import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogs: any[] = [];

  constructor(
    private blogService: BlogService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.blogService.getAllBlogs().subscribe((data: any[]) => {
      this.blogs = data;
      console.log(this.blogs);
    });
  }

  redirectToForm() {
    this.router.navigate(['form'], { relativeTo: this.activatedRoute });
  }
}
