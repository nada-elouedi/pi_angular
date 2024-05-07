import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAssignmentComponent } from './layout/components/nada/list-assignment/list-assignment.component';
import { MeetingComponent } from './layout/components/saida/meeting/meeting.component';
import { AddMeetingComponent } from './layout/components/saida/add-meeting/add-meeting.component';

const routes: Routes = [
  {
    path: 'la',
    component: ListAssignmentComponent
  },
  {path:"meetings" , component:MeetingComponent},
  {path: "add", component:AddMeetingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
