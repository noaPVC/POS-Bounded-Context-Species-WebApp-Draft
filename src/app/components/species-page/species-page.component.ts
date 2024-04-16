import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, debounceTime, first, map, takeUntil } from 'rxjs';
import { DataService } from '../../services/data.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SpeciesItemComponent } from './species-item/species-item.component';
import { UtilityService } from '../../services/utility.service';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { SliderModule } from 'primeng/slider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-species-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    SpeciesItemComponent,

    AutoCompleteModule,
    SliderModule
  ],
  templateUrl: './species-page.component.html',
  styleUrl: './species-page.component.scss'
})
export class SpeciesPageComponent implements OnInit, OnDestroy {

  suggestions: string[] = []
  species$ = this.dataService.getSpecies({ depthStart: 10, depthEnd: 200 })

  readonly speciesSuggestions$: Observable<string[]> = this.dataService.getSpecies({ size: 10000, depthStart: 0, depthEnd: 1000 })
    .pipe(first(), map(species => species.map(s => s.Name.toLowerCase())))
  
  readonly unsubscribe$ = new Subject<void>()

  constructor(
    private dataService: DataService,
    private router: Router) {}

  form = new FormGroup({
    searchTerm: new FormControl<string>('', { nonNullable: true }),
    range: new FormControl<number[]>([0, 200])
  })

  ngOnInit(): void {

    this.form.valueChanges
      .pipe(takeUntil(this.unsubscribe$), debounceTime(500))
      .subscribe(value => {
        const { searchTerm, range } = value
        this.species$ = this.dataService.getSpecies({ depthStart: range![0], depthEnd: range![1], searchTerm })
      })
  }

  searchSuggestions(event: AutoCompleteCompleteEvent) {
    this.speciesSuggestions$
      .pipe(first())
      .subscribe(items => {
        this.suggestions = items.filter(s => s.includes(event.query.toLowerCase()))
        this.suggestions.sort()
      })
  }

  navigateToUserDetails() {
    this.router.navigate(['/user-details']);
  }
  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }

}

interface AutoCompleteCompleteEvent {
  originalEvent: Event
  query: string
}
