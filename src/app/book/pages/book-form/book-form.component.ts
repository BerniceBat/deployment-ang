import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    authors: new FormArray([]),
    isbn: new FormControl('')
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.bookForm = this.fb.group({
      name: [''],
      authors: this.fb.array([]), 
      isbn: ['']
    });
  }

  get authorControls() {
    return this.bookForm.get('authors') as FormArray;
  }


  addAuthor() {
    const authorControl = this.fb.control('');
    this.authorControls.push(authorControl);
  }

  removeAuthor(index: number) {
    this.authorControls.removeAt(index);
  }

  onSubmit() {
   
    console.log(this.bookForm.value);
  }
  
}
