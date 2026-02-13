import { Component } from '@angular/core';
import { ButtonTabComponent } from '../../ui/button-tab-component/button-tab-component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-explore-all',
  imports: [ButtonTabComponent,RouterOutlet],
  templateUrl: './explore-all.html',
  styleUrl: './explore-all.css',
})
export class ExploreAll {

}
