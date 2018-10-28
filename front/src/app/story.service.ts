import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Story } from './story';
import { MessageService } from './message.service';
import { STORIES } from './mock-stories';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor(private messageService: MessageService) { }

  getStories(): Observable<Story[]> {
    this.messageService.add('StoryService: fetched stories');
    return of(STORIES);
  }
}
