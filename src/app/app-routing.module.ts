import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAssignmentComponent } from './layout/components/nada/list-assignment/list-assignment.component';
import { ClassroomsComponent } from './layout/components/rania/classrooms/classrooms.component';
import { AddClassroomComponent } from './layout/components/rania/classrooms/add-classroom/add-classroom.component';
import { ClassroomComponent } from './layout/components/rania/classrooms/classroom/classroom.component';

const routes: Routes = [
  {
    path: 'la',
    component: ListAssignmentComponent,
  },
  {
    path: 'classrooms',
    component: ClassroomsComponent,
  },
  {
    path: 'add',
    component: AddClassroomComponent,
  },
  {
    path: 'classroom',
    component: ClassroomComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
