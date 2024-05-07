import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ListAssignmentComponent } from './layout/components/nada/list-assignment/list-assignment.component';
import { HttpClientModule } from '@angular/common/http';
import { AddMeetingComponent } from './layout/components/saida/add-meeting/add-meeting.component';
import { MeetingComponent } from './layout/components/saida/meeting/meeting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScheduleModule, RecurrenceEditorModule , DayService , WeekService , WorkWeekService , MonthService , MonthAgendaService } from '@syncfusion/ej2-angular-schedule';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ListAssignmentComponent,
    AddMeetingComponent,
    MeetingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ScheduleModule, 
    RecurrenceEditorModule,
    ReactiveFormsModule

  ],
  providers: [DayService , WeekService , WorkWeekService , MonthService , MonthAgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
