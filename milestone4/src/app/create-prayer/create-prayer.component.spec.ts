import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePrayerComponent } from './create-prayer.component';

describe('CreatePrayerComponent', () => {
  let component: CreatePrayerComponent;
  let fixture: ComponentFixture<CreatePrayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePrayerComponent]
    });
    fixture = TestBed.createComponent(CreatePrayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
