import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { SkillsComponent } from './pages/skills/skills.component';

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
      {path: 'skills', component: SkillsComponent, data: { state: 3} }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
