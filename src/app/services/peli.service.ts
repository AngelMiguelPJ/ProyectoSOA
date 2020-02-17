import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { iPelis } from '../model/IPelis.interface';

@Injectable({
  providedIn: 'root'
})
export class PeliService {
  private url: string = '';
  private apiKey: string = 'b43847ef';

  constructor(private http: HttpClient) { }

  searchMovies(title: string, type: string) {
    this.url = `https://www.omdbapi.com/?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`;
    return this.http.get<iPelis>(this.url).pipe(map(results => results['Search']));
  }

  getDetails(id: string) {
    return this.http.get<iPelis>(`https://www.omdbapi.com/?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}