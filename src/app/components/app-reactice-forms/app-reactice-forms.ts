import { Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-app-reactice-forms',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './app-reactice-forms.html',
  styleUrl: './app-reactice-forms.css',
})
export class AppReacticeForms {
  private readonly fb = inject(FormBuilder);
  userForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    age: [18, [Validators.required, Validators.min(1), Validators.max(100)]],
    email: ['', [Validators.required, Validators.email]],
  });
  submitted = signal(false);

  fillPreset(type: 'dev' | 'design'): void {
    const value =
      type === 'dev'
        ? { name: 'Ethan Cole', age: 28, email: 'ethan@code.dev' }
        : { name: 'Nina Park', age: 26, email: 'nina@design.dev' };
    this.userForm.patchValue(value);
    this.userForm.markAsDirty();
  }

  resetForm(): void {
    this.userForm.reset({ name: '', age: 18, email: '' });
    this.submitted.set(false);
  }

  submit(): void {
    this.submitted.set(true);
    this.userForm.markAllAsTouched();
  }

  completion(): number {
    const total = Object.keys(this.userForm.controls).length;
    const valid = Object.values(this.userForm.controls).filter((control) => control.valid).length;
    return Math.round((valid / total) * 100);
  }
}
