import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
//import { HttpClientModule } from '@angular/common/http';
//import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gifsearch';
}
