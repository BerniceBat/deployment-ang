import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      bio: ['', Validators.required],
      active: [false], // For checkboxes, you can initialize with a default value (false in this case).
    });
  }

  onSubmit() {
    if (this.form.valid) {
      // Handle form submission here
      console.log(this.form.value);
    }
  }
}
