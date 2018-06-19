import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletememberComponent } from './deletemember.component';

describe('DeletememberComponent', () => {
  let component: DeletememberComponent;
  let fixture: ComponentFixture<DeletememberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletememberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletememberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
