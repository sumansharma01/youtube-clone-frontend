import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IndividualVideoComponent } from './individual-video/individual-video.component';

const routes: Routes = [{
  path:"",
  component:HomeComponent
},
{
  path:"individual",
  component:IndividualVideoComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
