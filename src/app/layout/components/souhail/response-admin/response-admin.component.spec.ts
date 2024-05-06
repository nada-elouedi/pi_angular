import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseAdminComponent } from './response-admin.component';

describe('ResponseAdminComponent', () => {
  let component: ResponseAdminComponent;
  let fixture: ComponentFixture<ResponseAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponseAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponseAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
