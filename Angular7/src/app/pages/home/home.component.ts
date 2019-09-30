import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { query, animate, stagger, trigger, style, transition, state } from '@angular/animations'; 
import { AnimationService } from '../shared/animation.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
  styleUrls: ['./home.component.scss'],
  animations: [

    trigger('greetingsAnim', [
      // transition of any to any
      transition('* => *', [
        // '.lead' means it is choosing the .lead class to query inside the div of @greetingsAnim
        query('.lead', style({ opacity: 0, transform: 'translateX(-45px)'})),

        query('.lead', stagger('500ms', [
          animate('1.4s 0.6s ease-out', style({ opacity: 1, transform: 'translateX(0)'}))
        ]))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  finishedAnim: string;
  subscription: Subscription;

  constructor(private router: Router, private service: AnimationService) {
    this.subscription = this.service.finished$.subscribe((data) => {
      this.finishedAnim = data;
      console.log("Data is: ", this.finishedAnim);
    })
   }

  ngOnInit() {
  }

  onClick() {
    this.router.navigate(['/pages/aboutme']);
  }

  // Prevents memory leak and we don't need subscription to live on in other components
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
