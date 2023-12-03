import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePrayerComponent } from './delete-prayer.component';

describe('DeletePrayerComponent', () => {
  let component: DeletePrayerComponent;
  let fixture: ComponentFixture<DeletePrayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletePrayerComponent]
    });
    fixture = TestBed.createComponent(DeletePrayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
