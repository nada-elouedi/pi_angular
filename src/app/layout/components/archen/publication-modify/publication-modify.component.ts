// Modify Publication Component
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicationService } from '../../../../services/publication.service';

@Component({
    selector: 'app-publication-modify',
    templateUrl: './publication-modify.component.html',
    styleUrls: ['./publication-modify.component.scss']
})
export class PublicationModifyComponent implements OnInit {
    publication: any = { title: '', description: '' };

    constructor(private route: ActivatedRoute, private router: Router, private publicationService: PublicationService) { }

    ngOnInit(): void {
        const publicationUuid = this.route.snapshot.paramMap.get('uuid');
        if (publicationUuid) {
            this.fetchPublicationDetails(publicationUuid);
        }
    }

    fetchPublicationDetails(publicationUuid: string): void {
        this.publicationService.getPublication(publicationUuid)
            .subscribe(
                (data: any) => {
                    console.log('Publication details:', data);
                    this.publication = data;
                },
                (error) => {
                    console.error('Error fetching publication details:', error);
                    // Handle error
                }
            );
    }

    submitForm(): void {
        this.publicationService.modifyPublication(this.publication)
            .subscribe(
                (data: any) => {
                    console.log('Publication modified successfully:', data);
                    // Redirect to publication details page after modification
                    this.router.navigate(['/publication', this.publication.uuid]);
                },
                (error) => {
                    console.error('Error modifying publication:', error);
                    // Handle error
                }
            );
    }
}
