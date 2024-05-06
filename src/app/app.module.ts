import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ListAssignmentComponent } from './layout/components/nada/list-assignment/list-assignment.component';
import { HttpClientModule } from '@angular/common/http';
import { ReclamationAddComponent } from './layout/components/souhail/reclamation-add/reclamation-add.component';
import { ReclamationAdminComponent } from './layout/components/souhail/reclamation-admin/reclamation-admin.component';
import { ResponseAdminComponent } from './layout/components/souhail/response-admin/response-admin.component';
import { ResponseShowComponent } from './layout/components/souhail/response-show/response-show.component';
import { ReclamationShowComponent } from './layout/components/souhail/reclamation-show/reclamation-show.component';
import { ReclamationInfoComponent } from './layout/components/souhail/reclamation-info/reclamation-info.component';
import { ReclamationEditComponent } from './layout/components/souhail/reclamation-edit/reclamation-edit.component';
import { ReclamationCheckComponent } from './layout/components/souhail/reclamation-check/reclamation-check.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ListAssignmentComponent,
    ReclamationAddComponent,
    ReclamationAdminComponent,
    ResponseAdminComponent,
    ResponseShowComponent,
    ReclamationShowComponent,
    ReclamationInfoComponent,
    ReclamationEditComponent,
    ReclamationCheckComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
