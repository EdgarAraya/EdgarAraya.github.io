import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProteinsComponent } from './components/proteins/proteins.component';

const routes: Routes = [
  {path: '', redirectTo: '/proteins', pathMatch: 'full' },
  {path:'proteins',component:ProteinsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
