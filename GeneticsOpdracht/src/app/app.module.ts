import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './subpages/about/about.component';
import { ContactComponent } from './subpages/contact/contact.component';
import { HomeComponent } from './subpages/home/home.component';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      RouterModule.forRoot([
        { path: "about", component: AboutComponent },
        { path: "contact", component: ContactComponent }
        ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
