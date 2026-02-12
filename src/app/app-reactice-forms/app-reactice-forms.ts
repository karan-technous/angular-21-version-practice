import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-app-reactice-forms',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './app-reactice-forms.html',
  styleUrl: './app-reactice-forms.css',
})
export class AppReacticeForms {
  userForm: any;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      age: [18, Validators.min(1)],
      email: ['', Validators.email],
    });

    this.userForm.valueChanges.subscribe((v: any) => {
      console.log('Old Form Value:', v);
    });
  }
}
