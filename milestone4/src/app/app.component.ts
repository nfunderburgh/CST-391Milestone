import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prayer collection';
  version = "1.0";

  constructor(private router: Router) {

  }

  public displayVersion() {
    alert(" Version: " + this.version);
  }

  public displayPrayerList() {
    this.router.navigate(['list-prayers'], { queryParams: { data: new Date() } });
  }

  public deletePrayer() {
    this.router.navigate(['delete-prayer'], { queryParams: { data: new Date() } });
  }
}
