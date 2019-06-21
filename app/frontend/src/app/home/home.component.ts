import { Component, OnInit } from '@angular/core';

import { HomeService } from './home.service';
import { Event } from './event'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  eventsList: Event[];
  eventsFeatured: Event[];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.listEvents()
      .subscribe(dados => this.eventsList = dados);

    this.homeService.listFeatured()
      .subscribe(featured => this.eventsFeatured = featured);
  }
}
