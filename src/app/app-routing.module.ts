import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudFormComponent } from './components/crud-form/crud-form.component';
import { EditCityComponent } from './components/edit-city/edit-city.component';
import { GetCitiesComponent } from './components/get-cities/get-cities.component';

const routes: Routes = [
  {path: 'crud-form', component: CrudFormComponent},
  {path: 'get-cities', component: GetCitiesComponent},
  {path: 'edit-city/:id/:city', component: EditCityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
