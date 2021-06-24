import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { GoogleMapsModule } from '@angular/google-maps';
// import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SiteComponent } from './components/site/site.component';
import { InfoComponent } from './components/info/info.component';
import { HomeComponent } from './components/home/home.component';
import { EmptyViewComponent } from './components/empty-view/empty-view.component';
import { AsideComponent } from './components/aside/aside.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ImageViewComponent } from './components/image-view/image-view.component';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { GoogleMapComponent } from './components/google-map/google-map.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SiteComponent,
    InfoComponent,
    HomeComponent,
    EmptyViewComponent,
    AsideComponent,
    LayoutComponent,
    ImageViewComponent,
    SearchComponent,
    AboutComponent,
    GoogleMapComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // GoogleMapsModule,
  ],
  providers: [],
  bootstrap: [LayoutComponent]// AppComponent
  
})
export class AppModule { }
