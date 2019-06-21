import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { RouterModule } from '@angular/router';

import { HomeService } from './home.service';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventCreateComponent } from './event-create/event-create.component';



@NgModule({
    imports: [
        CommonModule,
        //RouterModule,
        FormsModule,
        HomeRoutingModule
    ],
    exports: [],
    declarations: [
        HomeComponent,
        EventDetailComponent,
        EventCreateComponent
    ],
    providers: [
        HomeService
    ],
})

export class HomeModule { }
