import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GiphyService } from '../giphy.service';
//import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  gifs: any[] = [];
  query: string = '';
  constructor(private giphyService: GiphyService) {}
  search() {
    if (this.query.trim()) {
      this.giphyService.searchGifs(this.query).subscribe((response: any) => {
        this.gifs = response.data;
      });
    }
  }
}
