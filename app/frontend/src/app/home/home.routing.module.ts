import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventCreateComponent } from './event-create/event-create.component';

// routes list
const eventsRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'home/create', component: EventCreateComponent},
    {path: 'home/:id', component: EventDetailComponent}
];

@NgModule({
    imports: [RouterModule.forChild(eventsRoutes)],
    exports:[RouterModule]
})
export class HomeRoutingModule{}