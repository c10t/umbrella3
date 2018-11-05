import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Story } from '../story';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Output() searchRequest = new EventEmitter<string>();

  constructor(private storyService: StoryService) { }

  search(phrase: string): void {
    console.log("search dispatched:", phrase);
    this.searchRequest.emit(phrase);
  }

  ngOnInit(): void { }

}
