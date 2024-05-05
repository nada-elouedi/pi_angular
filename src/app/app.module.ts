import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ListAssignmentComponent } from './layout/components/nada/list-assignment/list-assignment.component';
import { HttpClientModule } from '@angular/common/http';
import { PublicationsListComponent } from './layout/components/archen/publications-list/publications-list.component';
import { PublicationAdminComponent } from './layout/components/archen/publication-admin/publication-admin.component';
import { PublicationAddComponent } from './publication-add/publication-add.component';
import { PublicationModifyComponent } from './layout/components/archen/publication-modify/publication-modify.component';
import { PublicationDetailsComponent } from './layout/components/archen/publication-details/publication-details.component';
import { FormsModule } from '@angular/forms';
import { PublicationPendingComponent } from './layout/components/archen/publication-pending/publication-pending.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ListAssignmentComponent,
    PublicationsListComponent,
    PublicationAdminComponent,
    PublicationAddComponent,
    PublicationModifyComponent,
    PublicationDetailsComponent,
    PublicationPendingComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
