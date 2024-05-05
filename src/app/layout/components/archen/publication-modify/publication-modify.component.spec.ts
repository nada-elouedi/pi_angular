import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationModifyComponent } from './publication-modify.component';

describe('PublicationModifyComponent', () => {
  let component: PublicationModifyComponent;
  let fixture: ComponentFixture<PublicationModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicationModifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicationModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
