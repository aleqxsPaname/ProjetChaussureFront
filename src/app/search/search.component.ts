import { Component } from '@angular/core';
import { SearchService } from '../services/SearchService.service';
import { Subject } from 'rxjs/Subject';

@Component({
 selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})
export class SearchComponent {
  results: Object;
  searchTerm$ = new Subject<string>();

  constructor(private searchService: SearchService) {
    this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results.results;
      });
  }
}