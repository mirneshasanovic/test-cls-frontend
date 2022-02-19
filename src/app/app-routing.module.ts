import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudFormComponent } from './components/crud-form/crud-form.component';

const routes: Routes = [
  {path: 'crud-form', component: CrudFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
