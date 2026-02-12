import { Component, signal } from '@angular/core';
import { AppSignalForms } from './app-signal-forms/app-signal-forms';
import { AppReacticeForms } from './app-reactice-forms/app-reactice-forms';
import { AngularAriaComponent } from './angular-aria/angular-aria';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports:[AppSignalForms,AppReacticeForms, AngularAriaComponent]
})
export class App {
  protected readonly title = signal('my-angular-21-app');
}
