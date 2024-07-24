import {Component, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {provideNativeDateAdapter} from '@angular/material/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/core'; // useful for typechecking
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import deLocale from '@fullcalendar/core/locales/de';
import { generateEvents, createEventId } from './termine-util';

@Component({
  selector: 'app-termine',
  standalone: true,
  imports: [CommonModule, FullCalendarModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './termine.component.html',
  styleUrl: './termine.component.scss'
})
export class TermineComponent  {
  //  calendarOptions: CalendarOptions = {
  //   initialView: 'dayGridMonth',
  //   plugins: [dayGridPlugin],
  //   weekNumbers: true,
  //   locale: deLocale,
  //   /* events: [
  //     { title: 'Kegeln', start: '2024-07-03T19:00:00', end: '2024-07-03T21:30:00'},
  //     { title: 'Kegeln', start: '2024-07-17T19:00:00', end: '2024-07-17T21:30:00' }
  //   ] */
  //   // initialEvents: generateEvents(),
  //   events: generateEvents(),
  //   dayMaxEvents: true,
  //   eventsSet: this.handleEvents.bind(this)
  // }; 
  
    calendarOptions = signal<CalendarOptions>({
      plugins: [
        interactionPlugin,
        dayGridPlugin,
        timeGridPlugin,
        listPlugin,
      ],
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      initialView: 'dayGridMonth',
      initialEvents: generateEvents(), // alternatively, use the `events` setting to fetch from a feed
      weekends: true,
      locale: deLocale,
      editable: true,
      // navLinks: false,
      // selectable: true,
      selectMirror: true,
      dayMaxEvents: true,
      showNonCurrentDates: false,
      // select: this.handleDateSelect.bind(this),
      // eventClick: this.handleEventClick.bind(this),
      eventsSet: this.handleEvents.bind(this)
    });

  currentEvents = signal<EventApi[]>([]);

  constructor(private changeDetector: ChangeDetectorRef) {
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents.set(events);
    this.changeDetector.detectChanges(); // workaround for pressionChangedAfterItHasBeenCheckedError
  }
}
