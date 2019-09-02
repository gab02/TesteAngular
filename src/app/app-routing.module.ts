import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


const routes: Routes = [{path: 'home', component: HomeComponent}];

@NgModule({
   exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
 
})
export class AppRoutingModule { }
