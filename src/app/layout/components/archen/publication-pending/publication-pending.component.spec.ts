import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationPendingComponent } from './publication-pending.component';

describe('PublicationPendingComponent', () => {
  let component: PublicationPendingComponent;
  let fixture: ComponentFixture<PublicationPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicationPendingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicationPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
