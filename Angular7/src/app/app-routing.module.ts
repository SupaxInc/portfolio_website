import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { Project1Component } from './pages/portfolio/project1/project1.component';
import { Project2Component } from './pages/portfolio/project2/project2.component';
import { Project3Component } from './pages/portfolio/project3/project3.component';
import { Project4Component } from './pages/portfolio/project4/project4.component';

const routes: Routes = [
  {path: '', redirectTo: '/pages/home', pathMatch:'full'},

  { // State will show the state of the app depending on the component loaded in router outlet
    path: 'pages', component: PagesComponent,
    children: [
      // PATH URL: /pages/home
      {path: 'home', component: HomeComponent,  data: { state: 1} },
      // PATH URL: /pages/aboutme
      {path: 'aboutme', component: AboutmeComponent, data: { state: 2} },
      // PATH URL: /pages/skills
      {path: 'skills', component: SkillsComponent, data: { state: 3} },
      // PATH URL: /pages/portfolio
      {path: 'portfolio', component: PortfolioComponent, data: { state: 4}},

      // ** Make this dynamic URL for another feature **
      // PATH URL: /pages/portfolio/1
      { path: 'portfolio/1', component: Project1Component, data: { state: 5}},
      // PATH URL: /pages/portfolio/2
      { path: 'portfolio/2', component: Project2Component, data: {state: 6}},
      // PATH  URL: /pages/portfolio/3
      { path: 'portfolio/3', component: Project3Component, data: {state: 7}},
      // PATH URL: /pages/portfolio/4
      { path: 'portfolio/4', component: Project4Component, data: {state: 8}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
