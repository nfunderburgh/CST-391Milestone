import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPrayersComponent } from './list-prayers.component';

describe('ListPrayersComponent', () => {
  let component: ListPrayersComponent;
  let fixture: ComponentFixture<ListPrayersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPrayersComponent]
    });
    fixture = TestBed.createComponent(ListPrayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
