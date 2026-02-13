import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-button-tab-component',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './button-tab-component.html',
  styleUrl: './button-tab-component.css',
})
export class ButtonTabComponent {
  @Input() icon: string = '';
  @Input() label: string = '';
  @Input() route: string = '';

}
