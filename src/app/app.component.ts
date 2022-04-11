import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    weekends: false ,// initial value
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: '台南', date: '2022-04-09'  },
      { title: '台南', date: '2022-04-10'  },
      { title: '打球', date: '2022-04-16' }
    ]
  };

  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
  }
  handleDateClick(arg: { dateStr: string; }) {
    alert('date click! ' + arg.dateStr)
  }

}
