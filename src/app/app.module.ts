import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ListAssignmentComponent } from './layout/components/nada/list-assignment/list-assignment.component';
import { HttpClientModule } from '@angular/common/http';
import { ClassroomsComponent } from './layout/components/rania/classrooms/classrooms.component';
import { AddClassroomComponent } from './layout/components/rania/classrooms/add-classroom/add-classroom.component';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { ClassroomComponent } from './layout/components/rania/classrooms/classroom/classroom.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ListAssignmentComponent,
    ClassroomsComponent,
    AddClassroomComponent,
    ClassroomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
