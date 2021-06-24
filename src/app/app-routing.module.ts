import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { HomeComponent } from './components/home/home.component';
import { SiteComponent } from './components/site/site.component';

const routes: Routes = [
  {path: "site", component: SiteComponent},
  {path: "site/about", component: AboutComponent},
  {path: "site/map", component: GoogleMapComponent},
  {path: "", redirectTo: "/site", pathMatch: "full"},
  {path: "**", redirectTo: "/site", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
