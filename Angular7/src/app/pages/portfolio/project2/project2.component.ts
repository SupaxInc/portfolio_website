import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project2',
  templateUrl: './project2.component.html',
  styleUrls: ['./project2.component.scss']
})
export class Project2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick() {
    this.router.navigate(['/pages/portfolio']);
  }

}
