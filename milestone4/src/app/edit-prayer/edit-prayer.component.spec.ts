import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPrayerComponent } from './edit-prayer.component';

describe('EditPrayerComponent', () => {
  let component: EditPrayerComponent;
  let fixture: ComponentFixture<EditPrayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPrayerComponent]
    });
    fixture = TestBed.createComponent(EditPrayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
