import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAssignmentComponent } from './layout/components/nada/list-assignment/list-assignment.component';
import { PublicationsListComponent } from './layout/components/archen/publications-list/publications-list.component'; // Import the PublicationsListComponent
import { PublicationAdminComponent } from './layout/components/archen/publication-admin/publication-admin.component'; // Import the PublicationAdminComponent
import { PublicationAddComponent } from './publication-add/publication-add.component';
import { PublicationPendingComponent } from './layout/components/archen/publication-pending/publication-pending.component';
import { PublicationDetailsComponent } from './layout/components/archen/publication-details/publication-details.component';

const routes: Routes = [
  {
    path: 'la',
    component: ListAssignmentComponent
  },
  {
    path: 'publications-list', 
    component: PublicationsListComponent
  },
  {
    path: 'publications-admin', 
    component: PublicationAdminComponent
  },
  { 
    path: 'publication/add',
    component: PublicationAddComponent
  },
  { 
    path: 'publication-pending', 
    component: PublicationPendingComponent 
  },
  { path: 'publication/:uuid', component: PublicationDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
