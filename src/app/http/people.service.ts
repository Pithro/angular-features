import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {PersonModel} from '../shared/model/person.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private header = new HttpHeaders({'Content-Type': 'application/json'});
  private url = 'http://localhost:8080/whatever';

  constructor(private http: HttpClient) { }

  savePerson(person: PersonModel): Observable<PersonModel> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<PersonModel>(this.url + '/persons', person, httpOptions).pipe(
      tap((newPerson: PersonModel) => console.log(`added person w/ id=${newPerson.id}`)),
      catchError(this.handleError<PersonModel>('addPerson'))
    );
  }

  getPeople(): Observable<PersonModel[]> {
    /*this.http.get<PersonModel[]>('commands/resetdb').subscribe(() => {
      console.log('reset');
    });*/

    return this.http.get<PersonModel[]>(this.url + '/persons'
      , {headers: this.header}
      ).pipe(
      tap(ev => console.log(ev)),
      catchError(this.handleError<PersonModel[]>('getPeople', []))
    );
  }

  getPerson(id: number): Observable<PersonModel> {
    const url = `${this.url}/${id}`;
    return this.http.get<PersonModel>(url).pipe(
      tap(_ => console.log(`fetched person id=${id}`)),
      catchError(this.handleError<PersonModel>(`getPerson id=${id}`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
