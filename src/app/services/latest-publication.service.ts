import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LatestPublicationService {
  latestPublication: any;

  constructor() { }

  setLatestPublication(publication: any): void {
    this.latestPublication = publication;
  }

  getLatestPublication(): any {
    return this.latestPublication;
  }
}
