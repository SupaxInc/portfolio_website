import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';

import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SkillsComponent } from './pages/skills/skills.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { Project1Component } from './pages/portfolio/project1/project1.component';
import { Project2Component } from './pages/portfolio/project2/project2.component';
import { Project3Component } from './pages/portfolio/project3/project3.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    HomeComponent,
    AboutmeComponent,
    SkillsComponent,
    PortfolioComponent,
    Project1Component,
    Project2Component,
    Project3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
