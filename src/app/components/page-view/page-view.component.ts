import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable, Subject, debounceTime, filter, takeUntil } from 'rxjs';
import { CommonModule, DatePipe } from '@angular/common';
import { QuestionMongoFE } from '../../models/models';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-view',
  standalone: true,
  templateUrl: './page-view.component.html',
  styleUrl: './page-view.component.scss',

  // used components in-page-view.component.ts
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class PageViewComponent implements OnInit, OnDestroy {

  readonly _unsubscribe$ = new Subject<void>()

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next()
    this._unsubscribe$.complete()
  }

}
