import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';

const routes: Routes = [
  {path: '', redirectTo: '/pages/home', pathMatch:'full'},

  {
    path: 'pages', component: PagesComponent,
    children: [
      // PATH URL: /pages/home
      {path: 'home', component: HomeComponent},
      {path: 'aboutme', component: AboutmeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
