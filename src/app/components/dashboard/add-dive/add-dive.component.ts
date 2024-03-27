import { Component } from '@angular/core';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-dive',
  standalone: true,
  imports: [
    InputTextModule,
    CalendarModule,
    DropdownModule,
    RatingModule,
    InputNumberModule,
    InputTextareaModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-dive.component.html',
  styleUrl: './add-dive.component.scss',
  providers: [],
})
export class AddDiveComponent {
  weathers: string[] = [
    'UNKNOWN',
    'SUNNY',
    'OVERCAST',
    'LIGHT_RAIN',
    'RAIN',
    'HEAVY_RAIN',
    'STORMY',
    'SNOWING',
    'WINDY',
  ];
  visibilityRatingTypes: string[] = ['GOOD', 'BAD', 'AVERAGE'];
  entry: string[] = [
    'SHORE',
    'BOAT',
    'POOL',
    'AQUARIUM',
    'JETTY',
    'ICE',
    'UNKNOWN',
  ];
  diveType: string[] = ['NIGHT', 'CAVE', 'ABNOE'];

  constructor(private formBuilder: FormBuilder) {}

  //formObject TODO
  dive = this.formBuilder.group({
    date: [''],
    rating: [''],
    weather: [''],
    visibilityDistance: this.formBuilder.group({
      visibilityDistanceValue: [''],
      distanceUnit: ['METER'],
    }),
    visibilityRating: [''],
    waterTemperature: this.formBuilder.group({
      temperatureValue: [''],
      temperatureUnit: ['CELSIUS'],
    }),
    airTemperature: this.formBuilder.group({
      temperatureValue: [''],
      temperatureUnit: ['CELSIUS'],
    }),
    entry: [''],
    comments: [''],
    buddy: [''],
    diveType: [''],
    superDive: [''],
    diveVacation: [''],
    equipment: [''],
    operator: [''],
  });

  //TODO
  addDive() {
    console.log('hlsdf');
  }
}
