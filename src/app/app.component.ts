import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { FlexiButtonColorType, FlexiButtonComponent } from '../../library/src/lib/flexi-button.component';

@Component({
  selector: 'app-root',
  imports: [FlexiButtonComponent],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.component.css'
})
export class AppComponent {
  btnColor = signal<FlexiButtonColorType>("teal");
}
