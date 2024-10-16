import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelectDrawingPageComponent } from './select-drawing-page/select-drawing-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SelectDrawingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ahyaaAttempt';
}
