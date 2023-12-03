import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPrayersComponent } from './list-prayers/list-prayers.component';
import { CreatePrayerComponent } from './create-prayer/create-prayer.component';
import { EditPrayerComponent } from './edit-prayer/edit-prayer.component';
import { DeletePrayerComponent } from './delete-prayer/delete-prayer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListPrayersComponent,
    CreatePrayerComponent,
    EditPrayerComponent,
    DeletePrayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
