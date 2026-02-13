import { Component, computed, signal } from '@angular/core';
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
    name: new FormControl('', { validators: [Validators.required, Validators.minLength(2)], nonNullable: true }),
    age: new FormControl(18, { validators: [Validators.required, Validators.min(1), Validators.max(100)], nonNullable: true }),
    email: new FormControl('', { validators: [Validators.required, Validators.email], nonNullable: true }),
  });

  formValue = signal(this.userForm.getRawValue());
  updates = signal(0);
  lastDeltaMs = signal(0);
  validCount = computed(() => Object.values(this.userForm.controls).filter((control) => control.valid).length);
  completion = computed(() => Math.round((this.validCount() / 3) * 100));
  ageBand = computed(() => {
    const age = this.userForm.controls.age.value;
    if (age < 20) return 'Early Career';
    if (age < 40) return 'Professional';
    if (age < 60) return 'Senior';
    return 'Mentor';
  });

  constructor() {
    let last = performance.now();
    this.userForm.valueChanges.subscribe(() => {
      const now = performance.now();
      this.lastDeltaMs.set(Math.round(now - last));
      last = now;
      this.formValue.set(this.userForm.getRawValue());
      this.updates.update((v) => v + 1);
    });
  }

  fillPreset(): void {
    this.userForm.patchValue({ name: 'Lena Cruz', age: 31, email: 'lena@signals.dev' });
  }

  resetForm(): void {
    this.userForm.reset({ name: '', age: 18, email: '' });
  }
}
