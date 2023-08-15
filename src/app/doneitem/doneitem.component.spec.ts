import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneitemComponent } from './doneitem.component';

describe('DoneitemComponent', () => {
  let component: DoneitemComponent;
  let fixture: ComponentFixture<DoneitemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoneitemComponent]
    });
    fixture = TestBed.createComponent(DoneitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
