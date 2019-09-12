import { Component, OnInit } from '@angular/core';

import { query, animate, group, trigger, style, transition } from '@angular/animations'; 
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [],
  animations: [
    trigger('routeAnimation', [  // routeAnimation is the declared variable from html page
      transition('1 => 2', [    // transitions from state 1 to state 2
        style({ height: '!'}),  // '!' sets the height of element equal to the height
                                // that it would be at the end of the animation
        // ':enter' lets you take the parent and children elements to be animated
        // Initial position of enter element
        query(':enter', style( { transform: 'translateX(100%)'})),
        // position absolute to take complete control of where they will be on the page
        query(':enter, :leave', style({position:'absolute', top: 0, left: 0, right: 0})),
        // Now we animate the leave page to go away 
        // Using group to animate two things at the same time
        group([
          query(':leave', [ // animate the component that is leaving
            animate('0.55s cubic-bezier(.35, 0, .25, 1)', style( { transform:'translateX(-100%)'})),
          ]),
          query(':enter', [ // animate the component that is entering
            animate('0.55s cubic-bezier(.35, 0, .25, 1)', style ({ transform: 'translateX(0)'})),
          ]),
        ]),
      ]),
      transition('2 => 1', [
        style({ height: '!'}),
        query(':enter', style( { transform: 'translateX(-100%)'})),
        query(':enter, :leave', style({position:'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [ // animate the component that is leaving
            animate('0.55s cubic-bezier(.35, 0, .25, 1)', style( { transform:'translateX(100%)'})),
          ]),
          query(':enter', [ // animate the component that is entering
            animate('0.55s cubic-bezier(.35, 0, .25, 1)', style ({ transform: 'translateX(0)'})),
          ]),
        ]),
      ])
    ])
  ]
})
export class PagesComponent implements OnInit {

  constructor(router: Router, activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  // outlet passed in from html page
  findState(outlet: RouterOutlet) {
    return outlet.activatedRouteData['state']; // state is the variable from routing module
  }
}
