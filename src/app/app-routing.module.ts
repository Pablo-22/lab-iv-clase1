import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AverageComponent } from './features/average/average.component';
import { LoginComponent } from './core/login/login.component';
import { WelcomeComponent } from './core/welcome/welcome.component';
import { ErrorComponent } from './core/error/error.component';

const routes: Routes = [
	{ path:'average', component:AverageComponent },
	{ path:'login', component:LoginComponent },
	{ path:'welcome', component:WelcomeComponent },
	{ path:'error', component:ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
