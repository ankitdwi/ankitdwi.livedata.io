import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError} from 'rxjs/operators';
import { Tweet } from './tweet';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DataService {
  private url = 'assets/api/mock-data.json';

  constructor(private http: HttpClient) { }

  getTweets (): Observable<any> {
    return this.http.get<any>(this.url);
  }

}
