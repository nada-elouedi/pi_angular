import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAssignmentComponent } from './layout/components/nada/list-assignment/list-assignment.component';
import { ReclamationAddComponent } from './layout/components/souhail/reclamation-add/reclamation-add.component';
import { ReclamationAdminComponent } from './layout/components/souhail/reclamation-admin/reclamation-admin.component';
import { ReclamationShowComponent } from './layout/components/souhail/reclamation-show/reclamation-show.component';
import { ReclamationInfoComponent } from './layout/components/souhail/reclamation-info/reclamation-info.component';
import { ReclamationEditComponent } from './layout/components/souhail/reclamation-edit/reclamation-edit.component';
import { ReclamationCheckComponent } from './layout/components/souhail/reclamation-check/reclamation-check.component';
import { ResponseAdminComponent } from './layout/components/souhail/response-admin/response-admin.component';
const routes: Routes = [
  {
    path: 'la',
    component: ListAssignmentComponent
  },
  {
    path: 'reclamation-add',
    component: ReclamationAddComponent
  },
  {
    path: 'reclamation-admin',
    component: ReclamationAdminComponent
  },

  {
    path: 'reclamation-show',
    component: ReclamationShowComponent
  },

  { 
    path: 'reclamation/:uuid', 
    component: ReclamationInfoComponent 
  },
  

  { path: 'reclamation/edit/:uuid', component: ReclamationEditComponent },
  { path: 'reclamation/info/:uuid', component: ReclamationInfoComponent },
  { path: 'reclamation/check/:uuid', component: ReclamationCheckComponent },
  {
    path: 'response/admin', 
    component: ResponseAdminComponent
  }



  
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
