import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddClassroomService } from 'src/app/services/add-classroom.service';

@Component({
  selector: 'app-add-classroom',
  templateUrl: './add-classroom.component.html',
  styleUrls: ['./add-classroom.component.scss'],
})
export class AddClassroomComponent {
  constructor(private classroomService: AddClassroomService) {}
  classroom: any = {}; // Déclaration de la propriété classroom

  onSubmit(form: NgForm) {
    if (form.valid) {
      const classroomData = {
        name: form.value.name,
        description: form.value.description,
      };

      this.classroomService.addClassroom(classroomData).subscribe(
        (response) => {
          // Gérer la réponse du serveur si nécessaire
          console.log('Classroom added successfully:', response);
          // Vous pouvez rediriger l'utilisateur vers une autre page ici
        },
        (error) => {
          console.error('Error adding classroom:', error);
          // Gérer les erreurs si nécessaire
        }
      );
    }
  }
}
