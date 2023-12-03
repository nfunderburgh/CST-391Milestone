import { Component } from '@angular/core';
import { Prayer } from '../models/Prayer';
import { PrayerServiceService } from '../service/prayer-service.service';

@Component({
  selector: 'app-edit-prayer',
  templateUrl: './edit-prayer.component.html',
  styleUrls: ['./edit-prayer.component.css']
})
export class EditPrayerComponent {
  prayer: Prayer = new Prayer(0, '', false, '');
  wasSubmitted: boolean = false;

  constructor(private service: PrayerServiceService) { }

  ngOnInit() { }

  public onSubmit() {
    this.service.updatePrayer(this.prayer, this.test);
    console.log('The return from updatePrayer() was ' + status);
    this.wasSubmitted = true;
  }

  test() {

  }
}
