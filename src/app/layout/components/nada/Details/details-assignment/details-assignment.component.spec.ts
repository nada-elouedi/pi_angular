import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAssignmentComponent } from './details-assignment.component';

describe('DetailsAssignmentComponent', () => {
  let component: DetailsAssignmentComponent;
  let fixture: ComponentFixture<DetailsAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsAssignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
