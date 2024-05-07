import { Component, OnInit } from '@angular/core';
import { View , EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import { Subject } from 'rxjs';
import { Calendar, CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { AddmeetingService } from 'src/app/services/addmeeting.service';
import { AddMeetingComponent } from '../add-meeting/add-meeting.component';
@Component({
  selector: 'app-meeting',
  //template: '<ejs-schedule height="850" width="1250" [eventSettings]="eventObject" [selectedDate]="setDate" [(currentView)]="setView"></ejs-schedule>',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
})
export class MeetingComponent implements OnInit{
  meetings: { title: string, date: string }[] = []; // Define Meeting type inline
  calendar!: Calendar;


  constructor(private meetingService: AddmeetingService) { }

  ngOnInit(): void {
    this.loadMeetings();
  }

  loadMeetings() {
    this.meetingService.getMeetings().subscribe((meetings: any[]) => {
      this.meetings = meetings;
      this.initializeCalendar(); // Call initializeCalendar after meetings are loaded
    });

  }
  initializeCalendar() {
    const calendarEl = document.getElementById('calendar');
    if (calendarEl) {
      this.calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin],
        initialView: 'dayGridMonth',
        events: this.meetings.map(meeting => ({
          title: meeting.title,
          start: meeting.date,
          // Add other event properties as needed
        }))
      });
      this.calendar.render();
    }
  }}

  
  
  
  
  
  
  //title='my-meeting';
  //public setView: View = "Month";
  //public setDate: Date = new Date(2024,5,2);
  //public eventObject: EventSettingsModel = {
    //dataSource:[{
      //Subject: " Meeting PI", // esm meeting
      //StartTime: new Date(2024,4,3,9,0), //4eme hiya x am 5/3/24 4:00 AM
      //EndTime: new Date(2024,4,3,12,0) // 5/3/24 6:00 AM
      //IsReadonly : true
    //}

    //]
  //}


