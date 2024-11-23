import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadEventComponent } from './read-event.component';

describe('ReadEventComponent', () => {
  let component: ReadEventComponent;
  let fixture: ComponentFixture<ReadEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadEventComponent]
    });
    fixture = TestBed.createComponent(ReadEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
