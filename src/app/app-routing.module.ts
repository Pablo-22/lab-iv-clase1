import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AverageComponent } from './features/average/average.component';

const routes: Routes = [
	{ path:'average', component:AverageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
