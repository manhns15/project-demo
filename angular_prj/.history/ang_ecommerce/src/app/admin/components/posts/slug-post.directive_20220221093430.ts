import { Directive, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appSlugPost]'
})
export class SlugPostDirective implements OnInit, OnDestroy {
  valueSubscription!: Subscription;
  constructor() { }

}
