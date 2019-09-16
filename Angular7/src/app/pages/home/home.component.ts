import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private router: Router) {

   }

  ngOnInit() {
  }

  onClick() {
    this.router.navigate(['/pages/aboutme']);
  }

}
