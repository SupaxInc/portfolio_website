import { Component, OnInit } from '@angular/core';

import { query, animate, group, trigger, style, transition, state, AnimationTransitionMetadata } from '@angular/animations'; 
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import { AnimationService } from './shared/animation.service';

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
      transition('1 => 3', [   
        style({ height: '!'}),
        query(':enter', style( { transform: 'translateX(100%)'})),
        query(':enter, :leave', style({position:'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [ // animate the component that is leaving
            animate('0.55s cubic-bezier(.35, 0, .25, 1)', style( { transform:'translateX(-100%)'})),
          ]),
          query(':enter', [ // animate the component that is entering
            animate('0.55s cubic-bezier(.35, 0, .25, 1)', style ({ transform: 'translateX(0)'})),
          ]),
        ]),
      ]),
      transition('1 => 4', [  
        style({ height: '!'}),
        query(':enter', style( { transform: 'translateX(100%)'})),
        query(':enter, :leave', style({position:'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [ // animate the component that is leaving
            animate('0.55s cubic-bezier(.35, 0, .25, 1)', style( { transform:'translateX(-100%)'})),
          ]),
          query(':enter', [ // animate the component that is entering
            animate('0.55s cubic-bezier(.35, 0, .25, 1)', style ({ transform: 'translateX(0)'})),
          ]),
        ]),
      ]),
      transition('1 => 9', [    // transitions from state 1 to state 9
        style({ height: '!'}),
        query(':enter', style( { transform: 'translateX(100%)'})),
        query(':enter, :leave', style({position:'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [ // animate the component that is leaving
            animate('0.55s cubic-bezier(.35, 0, .25, 1)', style( { transform:'translateX(-100%)'})),
          ]),
          query(':enter', [ // animate the component that is entering
            animate('0.55s cubic-bezier(.35, 0, .25, 1)', style ({ transform: 'translateX(0)'})),
          ]),
        ]),
      ]),
      transition('2 => 3', [ 
        style({ height: '!'}),
        query(':enter', style( { transform: 'translateX(100%)'})),
        query(':enter, :leave', style({position:'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [ // animate the component that is leaving
            animate('0.55s cubic-bezier(.35, 0, .25, 1)', style( { transform:'translateX(-100%)'})),
          ]),
          query(':enter', [ // animate the component that is entering
            animate('0.55s cubic-bezier(.35, 0, .25, 1)', style ({ transform: 'translateX(0)'})),
          ]),
        ]),
      ]),
      transition('2 => 4', [  
        style({ height: '!'}),
        query(':enter', style( { transform: 'translateX(100%)'})),
        query(':enter, :leave', style({position:'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [ // animate the component that is leaving
            animate('0.55s cubic-bezier(.35, 0, .25, 1)', style( { transform:'translateX(-100%)'})),
          ]),
          query(':enter', [ // animate the component that is entering
            animate('0.55s cubic-bezier(.35, 0, .25, 1)', style ({ transform: 'translateX(0)'})),
          ]),
        ]),
      ]),
      transition('2 => 9', [  
        style({ height: '!'}),
        query(':enter', style( { transform: 'translateX(100%)'})),
        query(':enter, :leave', style({position:'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [ // animate the component that is leaving
            animate('0.55s cubic-bezier(.35, 0, .25, 1)', style( { transform:'translateX(-100%)'})),
          ]),
          query(':enter', [ // animate the component that is entering
            animate('0.55s cubic-bezier(.35, 0, .25, 1)', style ({ transform: 'translateX(0)'})),
          ]),
        ]),
      ]),
      transition('3 => 4', [   
        style({ height: '!'}),
        query(':enter', style( { transform: 'translateX(100%)'})),
        query(':enter, :leave', style({position:'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [ // animate the component that is leaving
            animate('0.55s cubic-bezier(.35, 0, .25, 1)', style( { transform:'translateX(-100%)'})),
          ]),
          query(':enter', [ // animate the component that is entering
            animate('0.55s cubic-bezier(.35, 0, .25, 1)', style ({ transform: 'translateX(0)'})),
          ]),
        ]),
      ]),
      transition('3 => 9', [   
        style({ height: '!'}),
        query(':enter', style( { transform: 'translateX(100%)'})),
        query(':enter, :leave', style({position:'absolute', top: 0, left: 0, right: 0})),
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
      ]),
      transition('3 => 1', [
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
      ]),
      transition('4 => 1', [
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
      ]),
      transition('9 => 1', [
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
      ]),
      transition('4 => 2', [
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
      ]),
      transition('4 => 3', [
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
      ]),
      transition('4 => 9', [   
        style({ height: '!'}),
        query(':enter', style( { transform: 'translateX(100%)'})),
        query(':enter, :leave', style({position:'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [ // animate the component that is leaving
            animate('0.55s cubic-bezier(.35, 0, .25, 1)', style( { transform:'translateX(-100%)'})),
          ]),
          query(':enter', [ // animate the component that is entering
            animate('0.55s cubic-bezier(.35, 0, .25, 1)', style ({ transform: 'translateX(0)'})),
          ]),
        ]),
      ]),
      // /pages/portfolio ==> /pages/portfolio/1
      transition('4 => 5', [
        // overflow: hidden to hide vertical scroll bar during animation
        style({ height: '!', overflow: 'hidden'}),
        query(':enter', style( { transform: 'translateY(100%)'})),
        query(':enter, :leave', style({position:'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [ // animate the component that is leaving
            animate('0.55s cubic-bezier(.35, 0, .25, 1)', style( { transform:'translateY(-100%)'},)),
          ]),
          query(':enter', [ // animate the component that is entering
            animate('0.55s cubic-bezier(.35, 0, .25, 1)', style ({ transform: 'translateY(0)'})),
          ]),
        ]),
      ]),
      // /pages/portfolio ==> /pages/portfolio/2
      transition('4 => 6', [
        // overflow: hidden to hide vertical scroll bar during animation
        style({ height: '!', overflow: 'hidden'}),
        query(':enter', style( { transform: 'translateY(100%)'})),
        query(':enter, :leave', style({position:'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [ // animate the component that is leaving
            animate('0.55s cubic-bezier(.35, 0, .25, 1)', style( { transform:'translateY(-100%)'},)),
          ]),
          query(':enter', [ // animate the component that is entering
            animate('0.55s cubic-bezier(.35, 0, .25, 1)', style ({ transform: 'translateY(0)'})),
          ]),
        ]),
      ]),
      // /pages/portfolio ==> /pages/portfolio/3
      transition('4 => 7', [
        // overflow: hidden to hide vertical scroll bar during animation
        style({ height: '!', overflow: 'hidden'}),
        query(':enter', style( { transform: 'translateY(100%)'})),
        query(':enter, :leave', style({position:'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [ // animate the component that is leaving
            animate('0.55s cubic-bezier(.35, 0, .25, 1)', style( { transform:'translateY(-100%)'},)),
          ]),
          query(':enter', [ // animate the component that is entering
            animate('0.55s cubic-bezier(.35, 0, .25, 1)', style ({ transform: 'translateY(0)'})),
          ]),
        ]),
      ]),
      // /pages/portfolio ==> /pages/portfolio/4
      transition('4 => 8', [
        // overflow: hidden to hide vertical scroll bar during animation
        style({ height: '!', overflow: 'hidden'}),
        query(':enter', style( { transform: 'translateY(100%)'})),
        query(':enter, :leave', style({position:'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [ // animate the component that is leaving
            animate('0.55s cubic-bezier(.35, 0, .25, 1)', style( { transform:'translateY(-100%)'},)),
          ]),
          query(':enter', [ // animate the component that is entering
            animate('0.55s cubic-bezier(.35, 0, .25, 1)', style ({ transform: 'translateY(0)'})),
          ]),
        ]),
      ]),
      // /pages/portfolio/1 ==> /pages/portfolio
      transition('5 => 4', [
        // overflow: hidden to hide vertical scroll bar during animation
        style({ height: '!', overflow: 'hidden'}),
        query(':enter', style( { transform: 'translateY(-100%)'})),
        query(':enter, :leave', style({position:'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [ // animate the component that is leaving
            animate('0.55s cubic-bezier(.35, 0, .25, 1)', style( { transform:'translateY(100%)'})),
          ]),
          query(':enter', [ // animate the component that is entering
            animate('0.55s cubic-bezier(.35, 0, .25, 1)', style ({ transform: 'translateY(0)'})),
          ]),
        ]),
      ]),
      // /pages/portfolio/2 ==> /pages/portfolio
      transition('6 => 4', [
        // overflow: hidden to hide vertical scroll bar during animation
        style({ height: '!', overflow: 'hidden'}),
        query(':enter', style( { transform: 'translateY(-100%)'})),
        query(':enter, :leave', style({position:'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [ // animate the component that is leaving
            animate('0.55s cubic-bezier(.35, 0, .25, 1)', style( { transform:'translateY(100%)'})),
          ]),
          query(':enter', [ // animate the component that is entering
            animate('0.55s cubic-bezier(.35, 0, .25, 1)', style ({ transform: 'translateY(0)'})),
          ]),
        ]),
      ]),
      // /pages/portfolio/3 ==> /pages/portfolio
      transition('7 => 4', [
        // overflow: hidden to hide vertical scroll bar during animation
        style({ height: '!', overflow: 'hidden'}),
        query(':enter', style( { transform: 'translateY(-100%)'})),
        query(':enter, :leave', style({position:'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [ // animate the component that is leaving
            animate('0.55s cubic-bezier(.35, 0, .25, 1)', style( { transform:'translateY(100%)'})),
          ]),
          query(':enter', [ // animate the component that is entering
            animate('0.55s cubic-bezier(.35, 0, .25, 1)', style ({ transform: 'translateY(0)'})),
          ]),
        ]),
      ]),
      // /pages/portfolio/4 ==> /pages/portfolio
      transition('8 => 4', [
        // overflow: hidden to hide vertical scroll bar during animation
        style({ height: '!', overflow: 'hidden'}),
        query(':enter', style( { transform: 'translateY(-100%)'})),
        query(':enter, :leave', style({position:'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [ // animate the component that is leaving
            animate('0.55s cubic-bezier(.35, 0, .25, 1)', style( { transform:'translateY(100%)'})),
          ]),
          query(':enter', [ // animate the component that is entering
            animate('0.55s cubic-bezier(.35, 0, .25, 1)', style ({ transform: 'translateY(0)'})),
          ]),
        ]),
      ]),
      transition('3 => 2', [
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
      ]),
      transition('4 => 2', [
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
      ]),
      transition('9 => 2', [
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
      ]),
      transition('9 => 3', [
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
      ]),
      transition('9 => 4', [
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
      ]),
    ])
  ]
})
export class PagesComponent implements OnInit {

  public animState: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private service: AnimationService) { }

  ngOnInit() {
    this.animState = "no";
  }

  public animStarted (event: AnimationEvent) {
    console.log("Start animating");
    this.animState ="no";
    this.service.checkAnimation(this.animState);
  }

  public animFinished (event: AnimationEvent) {
    console.log("Done animating");
    this.animState = "yes";
    this.service.checkAnimation(this.animState);
  }

  // outlet passed in from html page
  findState(outlet: RouterOutlet) {
    return outlet.activatedRouteData['state']; // state is the variable from routing module
  }

  btnClick() {
    window.open('/assets/pdf/PaulJohnGonzales_Resume2019.pdf', '_blank');
  }
}
