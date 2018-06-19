import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteghComponent } from './deletegh.component';

describe('DeleteghComponent', () => {
  let component: DeleteghComponent;
  let fixture: ComponentFixture<DeleteghComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteghComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteghComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
