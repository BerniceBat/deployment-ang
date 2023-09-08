import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit {

  blogForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    author: new FormControl(''),
    comments: new FormArray([]),
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.blogForm = this.fb.group({
      title: [''],
      description: [''],
      author: [''],
      comments: this.fb.array([]),
    });
  }

  get commentControls() {
    return this.blogForm.get('comments') as FormArray;
  }

  addComment() {
    const commentControl = this.fb.control('');
    this.commentControls.push(commentControl);
  }

  removeComment(index: number) {
    this.commentControls.removeAt(index);
  }

  onSubmit() {

    console.log(this.blogForm.value);
  }



}
