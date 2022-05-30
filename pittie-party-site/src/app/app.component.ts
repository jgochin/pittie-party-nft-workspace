import { Component } from '@angular/core';
import StateManager from 'src/classes/state-manager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pittie-party-site';
  stateManager: StateManager = new StateManager()
}
