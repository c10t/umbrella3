import { Component, OnInit } from '@angular/core';
import { Story } from '../story';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  stories: Story[];

  constructor(private storyService: StoryService) { }

  ngOnInit() {
    this.getStories();
  }

  getStories(): void {
    this.storyService.getStories().subscribe(stories => this.stories = stories);
  }
}
