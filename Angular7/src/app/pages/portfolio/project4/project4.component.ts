import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project4',
  templateUrl: './project4.component.html',
  styleUrls: ['./project4.component.scss']
})
export class Project4Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick() {
    this.router.navigate(['/pages/portfolio']);
  }
}
