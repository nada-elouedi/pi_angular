import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationCheckComponent } from './reclamation-check.component';

describe('ReclamationCheckComponent', () => {
  let component: ReclamationCheckComponent;
  let fixture: ComponentFixture<ReclamationCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamationCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReclamationCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
