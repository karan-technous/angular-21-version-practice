import { Component,signal } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-app-signal-forms',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './app-signal-forms.html',
  styleUrl: './app-signal-forms.css',
})
export class AppSignalForms {

  userForm = new FormGroup({
    name: new FormControl('', { validators: Validators.required, nonNullable: true }),
    age: new FormControl(18, { validators: Validators.min(1), nonNullable: true }),
    email: new FormControl('', { validators: Validators.email, nonNullable: true }),
  });

  formValue = signal(this.userForm.value);

  constructor() {
    this.userForm.valueChanges.subscribe(v => {
      this.formValue.set(v);
      console.log("New Form Value:", v);
    });
  }
}
