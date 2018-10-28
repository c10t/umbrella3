import { Component, OnInit } from '@angular/core';

export interface Story {
  posted: Date;
  title: string;
}

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  stories: Story[] = [
    {
      title: "example1",
      posted: new Date('10/28/18')
    },
    {
      title: "example2",
      posted: new Date('10/27/18')
    },
    {
      title: "example3",
      posted: new Date('10/26/18')
    }
  ]
}
