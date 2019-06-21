import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { HomeService } from './../home.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})

export class EventDetailComponent implements OnInit {

  event: any = {};
  sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService
  ) { }


  ngOnInit() {

    this.sub = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.event = this.homeService.getEvent(id)
          .subscribe(dados => this.event = dados);

        if (this.event === null) {
          this.event = {};
        }
      }
    )
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
