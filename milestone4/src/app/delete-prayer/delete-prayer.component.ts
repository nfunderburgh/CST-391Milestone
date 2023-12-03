import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrayerServiceService } from '../service/prayer-service.service';
import { Prayer } from '../models/Prayer';

@Component({
  selector: 'app-delete-prayer',
  templateUrl: './delete-prayer.component.html',
  styleUrls: ['./delete-prayer.component.css']
})
export class DeletePrayerComponent {
  prayer: Prayer = new Prayer(0, '', false, '');
  wasSubmitted: boolean = false;

  constructor(private service: PrayerServiceService) { }

  ngOnInit() { }

  public onSubmit() {
    this.service.deletePrayer(this.prayer.prayerId, this.test);
    console.log('The return from deletePrayer() was ' + status);
    this.wasSubmitted = true;
  }

  test() {

  }
}
