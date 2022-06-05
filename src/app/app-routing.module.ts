import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StadiumListComponent } from './components/stadium-list/stadium-list.component';
import { StadiumComponent } from './components/stadium/stadium.component';

const routes: Routes = [

  { path: '', component: StadiumListComponent },
  { path: 'stadium/:id', component: StadiumComponent },
  { path: '**', component: StadiumListComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
