import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Story } from '../story';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  @Input() stories$: Observable<Story[]>;

  constructor(private storyService: StoryService) { }

  ngOnInit() {
    this.getStories();
  }

  getStories(): void {
    this.stories$ = this.storyService.getStories();
  }
}
