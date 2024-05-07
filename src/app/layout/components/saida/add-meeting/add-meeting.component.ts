import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddmeetingService } from 'src/app/services/addmeeting.service';
import { View , EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-add-meeting',
  template: '<ejs-schedule height="850" width="1250" [eventSettings]="eventObject" [selectedDate]="setDate" [(currentView)]="setView"></ejs-schedule>',

  //templateUrl: './add-meeting.component.html',
  styleUrls: ['./add-meeting.component.scss']
})
export class AddMeetingComponent {
  title='my-meeting';
  public setView: View = "Month";
  public setDate: Date = new Date(2024,5,2);
  public eventObject: EventSettingsModel = {
    dataSource:[{
      Subject: " Meeting PI", // esm meeting
      StartTime: new Date(2024,4,3,9,0), //4eme hiya x am 5/3/24 4:00 AM
      EndTime: new Date(2024,4,3,12,0) // 5/3/24 6:00 AM
      //IsReadonly : true
    }

    ]
  }

}

















 // meetingForm!: FormGroup;

//constructor(private fb: FormBuilder, private meetingService: AddmeetingService) { }

//ngOnInit(): void {
  //this.meetingForm = this.fb.group({
    //title: ['', Validators.required],
    //date: ['', Validators.required],
    //link: ['', Validators.required]
  //});
//}
//onSubmit() {
  //if (this.meetingForm.valid) {
    //const meetingData = this.meetingForm.value;
    //this.meetingService.AddMeeting(meetingData).subscribe(() => {
      // Handle successful submission, maybe reset the form
      //this.meetingForm.reset();
    //});
  //}
//}
///}
  

