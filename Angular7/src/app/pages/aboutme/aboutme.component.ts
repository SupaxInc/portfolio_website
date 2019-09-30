import { Component, OnInit } from '@angular/core';
import { query, animate, stagger, trigger, style, transition, state } from '@angular/animations'; 
import { Router } from '@angular/router';
import { PagesComponent } from '../pages.component';
import { AnimationService } from '../shared/animation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styles: [],
  styleUrls: ['./aboutme.component.scss'],
  animations: [

    trigger('greetingsAnim', [
      // transition of any to any
      transition('* => *', [
        // '.lead' means it is choosing the .lead class to query inside the div of @greetingsAnim
        query('h4', style({opacity: 0, transform: 'translateX(-25px)'})),

        query('h4', stagger('500ms', [
          animate('1.3s 0.4s ease-out', style({ opacity: 1, transform: 'translateX(0)'}))
        ]))
      ])
    ])
  ]
})
export class AboutmeComponent implements OnInit {
  finishedAnim: string;
  subscription: Subscription;

  constructor(private router: Router, private service: AnimationService) {
    this.subscription = this.service.finished$.subscribe((data) => {
      this.finishedAnim = data;
      console.log("Data is: ", this.finishedAnim);
    });
   }

  ngOnInit() {
  }

  // Prevents memory leak and we don't need subscription to live on in other components
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
