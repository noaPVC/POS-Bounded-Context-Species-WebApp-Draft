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
import { HttpClient } from '@angular/common/http';

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

  constructor(private formBuilder: FormBuilder,private http: HttpClient) {}

  //formObject TODO
  dive = this.formBuilder.group({
    date: [''],
    rating: [''],
    weather: [''],
    visibilityDistance:[''],
    visibilityRating: [''],
    waterTemperature: [''],
    airTemperature: [''],
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
    console.log(this.dive);
    var newdive = this.dive.value;
    var temp = newdive.waterTemperature;
    //@ts-ignore
    newdive.waterTemperature = {waterTemperatureValue: temp, temperatureUnit: 'CELSIUS'};
   temp = newdive.airTemperature;
    //@ts-ignore
    newdive.airTemperature = {airTemperatureValue: temp, temperatureUnit: 'CELSIUS'};
    temp = newdive.visibilityDistance;
    //@ts-ignore
    newdive.visibilityDistance = {visibilityDistanceValue: temp, distanceUnit: 'METER'};
    // temp = newdive.visibilityRating;
    // //@ts-ignore
    // newdive.visibilityRating = this.visibilityRatingTypes.indexOf(temp);
    // temp = newdive.weather;
    // //@ts-ignore
    // newdive.weather = this.weathers.indexOf(temp);
    // temp = newdive.entry;
    // //@ts-ignore
    // newdive.entry = this.entry.indexOf(temp);

    newdive.equipment=null;
    newdive.operator=null;
    newdive.superDive=null;
    newdive.diveVacation=null;
    console.log(newdive);
    

    //@ts-ignore
    newdive.visibilityDistance = {visibilityDistanceValue: temp, distanceUnit: 'METER'};
    this.http.post('http://localhost:8080/api/dive/', newdive).subscribe(data => {
      console.log(data);
    });


  }
}
