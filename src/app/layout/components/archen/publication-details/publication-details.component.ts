import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicationService } from '../../../../services/publication.service';

@Component({
  selector: 'app-publication-details',
  templateUrl: './publication-details.component.html',
  styleUrls: ['./publication-details.component.scss']
  
})
export class PublicationDetailsComponent implements OnInit {
  publication: any; // Variable to hold the details of the selected publication
  likeCount: number = 0; // Variable to hold the like count
  commentContent: string = ''; // Variable to hold the content of the new comment
  isAlreadyLiked: boolean = false; // Variable to hold whether the publication is already liked
  // Store reply content for each comment
  replyContents: { [commentId: string]: string } = {};

  constructor(private route: ActivatedRoute, private publicationService: PublicationService) { }

  ngOnInit(): void {
    const publicationUuid = this.route.snapshot.paramMap.get('uuid')!;
    this.fetchPublicationDetails(publicationUuid);
    this.fetchLikeCount(publicationUuid);
  }

  fetchPublicationDetails(publicationUuid: string): void {
    this.publicationService.getPublication(publicationUuid)
      .subscribe(
        (data: any) => {
          console.log('Publication details:', data);
          this.publication = data;
          // Initialize replyContent for each comment
          this.publication.comments.forEach((comment: any) => {
            this.replyContents[comment.uuid] = '';
          });
        },
        (error) => {
          console.error('Error fetching publication details:', error);
          // Handle error
        }
      );
  }

  fetchLikeCount(publicationUuid: string): void {
    this.publicationService.getLikeCount(publicationUuid)
      .subscribe(
        (count: number) => {
          this.likeCount = count;
        },
        (error) => {
          console.error('Error fetching like count:', error);
          // Handle error
        }
      );
  }

  submitComment(): void {
    if (this.commentContent.trim() === '') {
      alert('Please enter your comment.');
      return;
    }

    const newComment = {
      content: this.commentContent,
      user: { uuid: '5fd5fd-fdfd5f-fdqfdfqd5' }, // Replace 'userUuid2' with the actual user UUID
    };

    this.publicationService.addComment(this.publication.uuid, newComment)
      .subscribe(
        (data: any) => {
          console.log('Comment added:', data);
          this.commentContent = '';
          this.fetchPublicationDetails(this.publication.uuid);
        },
        (error) => {
          console.error('Error adding comment:', error);
          // Handle error
        }
      );
  }

  submitReply(commentId: string): void {
    const replyContent = this.replyContents[commentId].trim();
    if (replyContent === '') {
      alert('Please enter your reply.');
      return;
    }

    const newReply = {
      content: replyContent,
      user: { uuid: '5fd5fd-fdfd5f-fdqfdfqd5' }, // Replace with the actual user UUID
      date: new Date() // Current date
    };

    this.publicationService.addReplyToComment(commentId, newReply)
      .subscribe(
        (data: any) => {
          console.log('Reply added:', data);
          this.fetchPublicationDetails(this.publication.uuid);
          // Clear reply content after submission
          this.replyContents[commentId] = '';
        },
        (error) => {
          console.error('Error adding reply:', error);
          // Handle error
        }
      );
  }

  likePublication(publicationUuid: string): void {
    const userUuid = 'fezfdqfd-54qdfdq-fqdfdqf5-'; // Assuming you have the user UUID available
    if (!this.isAlreadyLiked) { // Check if publication is not already liked
      this.publicationService.likePublication(publicationUuid, userUuid)
        .subscribe(
          (data: any) => {
            console.log('Publication liked successfully:', data);
            this.isAlreadyLiked = true; // Update like status
            this.fetchLikeCount(publicationUuid); // Update like count after liking
          },
          (error) => {
            console.error('Error liking publication:', error);
            // Handle error
          }
        );
    } else {
      console.log('Publication already liked by the user.');
    }
  }

  confirmDelete(commentUuid: string): void {
    const confirmation = confirm('Are you sure you want to delete this comment?');
    if (confirmation) {
      this.deleteComment(commentUuid);
    }
  }

  deleteComment(commentUuid: string): void {
    this.publicationService.deleteComment(commentUuid)
      .subscribe(
        () => {
          console.log('Comment deleted successfully');
          // Refresh publication details after deletion
          this.fetchPublicationDetails(this.publication.uuid);
        },
        (error) => {
          console.error('Error deleting comment:', error);
          // Handle error
        }
      );
  }
}
