import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAssignmentComponent } from './layout/components/nada/list-assignment/list-assignment.component';
import { CourseComponent } from './layout/components/course/course.component';

const routes: Routes = [
  {path: 'la',
    component: ListAssignmentComponent
  },
  {path: 'course', component: CourseComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
