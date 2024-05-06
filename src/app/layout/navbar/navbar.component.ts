import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Wait for the DOM to be fully loaded
    document.addEventListener("DOMContentLoaded", () => {
      // Select the dropdown trigger element
      const dropdownTrigger = document.querySelector('.dropdown-toggle');

      // Check if dropdownTrigger is not null before adding event listener
      dropdownTrigger?.addEventListener('click', () => {
        // Select the dropdown menu
        const dropdownMenu = dropdownTrigger?.nextElementSibling as HTMLElement;

        // Toggle the 'show' class to display/hide the dropdown menu
        dropdownMenu?.classList.toggle('show');
      });

      // Close dropdown menu when clicking outside of it
      window.addEventListener('click', (event) => {
        if (!(event.target as HTMLElement).matches('.dropdown-toggle')) {
          const dropdownMenus = document.querySelectorAll('.dropdown-menu') as NodeListOf<HTMLElement>;
          dropdownMenus.forEach((dropdownMenu) => {
            if (dropdownMenu.classList.contains('show')) {
              dropdownMenu.classList.remove('show');
            }
          });
        }
      });
    });
  }

}
