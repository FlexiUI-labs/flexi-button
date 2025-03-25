import { Component, signal } from '@angular/core';
import { FlexiButtonColorType, FlexiButtonComponent } from '../../library/src/lib/flexi-button.component';

@Component({
  selector: 'app-root',
  imports: [FlexiButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  btnColor = signal<FlexiButtonColorType>("teal");
}
