import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePrayerComponent } from './create-prayer/create-prayer.component';
import { ListPrayersComponent } from './list-prayers/list-prayers.component';
import { EditPrayerComponent } from './edit-prayer/edit-prayer.component';
import { DeletePrayerComponent } from './delete-prayer/delete-prayer.component';

const routes: Routes = [
  { path: 'create', component: CreatePrayerComponent },
  { path: 'list-prayers', component: ListPrayersComponent },
  { path: 'edit', component: EditPrayerComponent },
  { path: 'delete', component: DeletePrayerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
