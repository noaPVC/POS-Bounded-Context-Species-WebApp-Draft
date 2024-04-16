import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Dive, DivePreview } from '../models/dive';

@Injectable({
  providedIn: 'root',
})
export class DiveService {
  private apiUrl = 'http://localhost:8080/api';
  constructor(private http: HttpClient) {}

  getAllDivesFromUser(userId: number) {
    return this.http
      .get<any>(`${this.apiUrl + '/dive/diver/' + userId}`, {})
      .pipe(
        map((response: any) => {
          return this.mapDives(response);
        })
      );
  }

  getAllDives() {
    return this.http.get<any>(`${this.apiUrl + '/dive/'}`, {}).pipe(
      map((response: any) => {
        return this.mapDives(response);
      })
    );
  }

  getDiveById(diveId: number) {
    return this.http.get<any>(`${this.apiUrl + '/dive/' + diveId}`, {}).pipe(
      map((response: any) => {
        return this.mapDive(response);
      })
    );
  }

  mapDives(response: any[]): DivePreview[] {
    return response.map((dive: DivePreview) => {
      return {
        id: dive.id,
        date: new Date(dive.date),
        weather: dive.weather,
        rating: dive.rating,
        entry: dive.entry,
        comments: dive.comments,
        operator: dive.operator,
      };
    });
  }

  mapDive(response: any): Dive {
    return {
      id: response.id,
      date: new Date(response.date),
      rating: response.rating,
      weather: response.weather,
      visibilityDistance: {
        visibilityDistanceValue:
          response.visibilityDistance.visibilityDistanceValue,
        distanceUnit: response.visibilityDistance.distanceUnit,
      },
      visibilityRating: response.visibilityRating,
      waterTemperature: {
        temperatureValue: response.waterTemperature.temperatureValue,
        temperatureUnit: response.waterTemperature.temperatureUnit,
      },
      airTemperature: {
        temperatureValue: response.airTemperature.temperatureValue,
        temperatureUnit: response.airTemperature.temperatureUnit,
      },
      entry: response.entry,
      operator: response.operator,
      comments: response.comments,
      buddy: response.buddy,
      diveType: response.diveType,
      superDive: response.superDive,
      diveVacation: response.diveVacation,
      equipment: response.equipment,
    };
  }
}
