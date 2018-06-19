import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveghComponent } from './approvegh.component';

describe('ApproveghComponent', () => {
  let component: ApproveghComponent;
  let fixture: ComponentFixture<ApproveghComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveghComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveghComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
