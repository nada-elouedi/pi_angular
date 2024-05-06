import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationShowComponent } from './reclamation-show.component';

describe('ReclamationShowComponent', () => {
  let component: ReclamationShowComponent;
  let fixture: ComponentFixture<ReclamationShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamationShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReclamationShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
