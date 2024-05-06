import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationInfoComponent } from './reclamation-info.component';

describe('ReclamationInfoComponent', () => {
  let component: ReclamationInfoComponent;
  let fixture: ComponentFixture<ReclamationInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamationInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReclamationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
