import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  finished$: Observable<string>;
  private finishedSubject = new Subject<string>();

  constructor() { 
    this.finished$ = this.finishedSubject.asObservable();
  }

  checkAnimation(data: string) {
    this.finishedSubject.next(data);
  }
}
