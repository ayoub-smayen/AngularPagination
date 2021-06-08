import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalenderPageComponent } from './container/calender-page/calender-page.component';
import { CalenderRoutingModule } from './calender-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CalenderComponent } from './components/calender/calender.component';
import { FormsModule } from '@angular/forms';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
//import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  // timeGridPlugin,
  listPlugin,
  interactionPlugin,
]);
@NgModule({
  declarations: [CalenderPageComponent, CalenderComponent],
  imports: [
    CommonModule,
    CalenderRoutingModule,
    SharedModule,
    MatToolbarModule,
    CommonModule,
    FormsModule,
    FullCalendarModule,
  ],
})
export class CalenderrModule {}
