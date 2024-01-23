import { HostListener, Injectable } from '@angular/core';
import { Subject, fromEvent, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  readonly bodyScrollOffsetClass = 'offset-body-scroll'

  public isOffsetBodyScroll: boolean = false
  
  readonly _unsubscribe$ = new Subject<void>()

  constructor() {
    fromEvent(window, 'scroll')
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe(() => this.checkScroll())

    fromEvent(window, 'beforeunload').subscribe(() => {
      this._unsubscribe$.next()
      this._unsubscribe$.complete()
    })
  }

  private checkScroll() {
    const scrollOffset = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0
    this.isOffsetBodyScroll = scrollOffset > 10

    this.processSideEffects()
  }

  private processSideEffects() {
    this.isOffsetBodyScroll ? document.body.classList.add(this.bodyScrollOffsetClass) : document.body.classList.remove(this.bodyScrollOffsetClass)
  }

} 
