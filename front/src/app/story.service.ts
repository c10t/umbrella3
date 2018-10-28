import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Story } from './story';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  private storiesURL = "api/stories";

  constructor(
    private http: HttpClient, 
    private messageService: MessageService
  ) { }

  /** Log a StoryService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`StoryService: ${message}`);
  }

  /** GET story by id. Will 404 if id not found */
  getStory(id: number): Observable<Story> {
    const url = `${this.storiesURL}/${id}`;

    return this.http.get<Story>(url).pipe(
      tap(_ => this.log(`fetched story: id=${id}`)),
      catchError(this.handleError<Story>(`getStory id=${id}`))
    );
  }

  /** GET stories from the server */
  getStories(): Observable<Story[]> {
    return this.http.get<Story[]>(this.storiesURL)
      .pipe(
        tap(stories => this.log("fetched stories")),
        catchError(this.handleError("getStories", []))
      );
  }

  /** GET stories title contains search term */
  searchStories(term: string): Observable<Story[]> {
    if (!term.trim()) {
      this.log("trim... fetch all");
      // return of([]);
      return this.getStories();
    }

    return this.http.get<Story[]>(`${this.storiesURL}/?title=${term}`)
      .pipe(
        tap(stories => this.log(`found stories matchng "${term}": ${stories.length} hits`)),
        catchError(this.handleError<Story[]>("searchStories", []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
     
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
     
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
     
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
