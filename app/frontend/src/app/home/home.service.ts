import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Event } from './event';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  private readonly APIevents = environment.apiEndpoint + '/events';
  private readonly APIfeatured = environment.apiEndpoint + '/events/featured';
  private readonly APIeventId = environment.apiEndpoint + '/events/select/';

  constructor(private http: HttpClient) { }

  listEvents() {
    return this.http.get<Event[]>(this.APIevents);
  }

  listFeatured() {
    return this.http.get<Event[]>(this.APIfeatured);
  }

  getEvent(id: number) {
    //console.log(this.APIeventId+id);
    return this.http.get<Event>(this.APIeventId + id);
  }
}
