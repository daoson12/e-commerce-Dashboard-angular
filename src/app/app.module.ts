import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './layouts/nav-bar/nav-bar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './layouts/home/home.component';
import { HeaderComponent } from './layouts/header/header.component';

// import { DashboardComponent } from './layouts/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,

    // DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
