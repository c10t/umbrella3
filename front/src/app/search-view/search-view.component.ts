import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Story } from '../story';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit {

  stories$: Observable<Story[]>
  private searchTerms = new Subject<string>();

  constructor(private storyService: StoryService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  searchStories(term: string) {
    console.log("event handle: ", term);
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.stories$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap(
        (term: string) => this.storyService.searchStories(term)
      ),
    );
  }

}
