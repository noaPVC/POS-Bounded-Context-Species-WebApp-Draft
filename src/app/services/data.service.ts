import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionMongoFE } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  BASE_URL = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  public getQuestions(query?: QuestionQuery): Observable<QuestionMongoFE[]> {
    // return this.http.get<QuestionDto[]>(`${this.BASE_URL}/api/questions?date=${query.date}&searchTerm=${query.searchTerm}`)
    return new Observable<QuestionMongoFE[]>(observer => {
      observer.next([{
        QuestionId: 'q123456',
        Title: 'Angular Reactive Forms - How to dynamically add form controls?',
        Description: 'I am working on an Angular project and I need to dynamically add form controls to a reactive form. How can I achieve this?',
        CreatedAt: new Date('2023-01-15T09:30:00'),
        UpdatedAt: new Date('2023-01-15T11:45:00'),
        CreatedBy: {
          UserId: 'user789',
          Name: 'Developer123',
          Email: 'developer123@example.com',
        },
        Tags: [
          {
            TagId: 't101',
            Name: 'Angular',
          },
          {
            TagId: 't202',
            Name: 'Reactive Forms',
          },
        ],
        Answers: [
          {
            AnswerId: 'a987654',
            Title: 'Dynamically Adding Form Controls in Angular Reactive Forms',
            Description: 'To dynamically add form controls in Angular reactive forms, you can use the `FormArray` and related methods. Here is an example implementation...',
            CreatedAt: new Date('2023-01-15T10:15:00'),
            UpdatedAt: new Date('2023-01-15T10:45:00'),
            CreatedBy: {
              UserId: 'user456',
              Name: 'AngularExpert',
              Email: 'angular.expert@example.com',
            },
          }
        ]
      }])
      observer.complete()
    })
  }

}

export interface QuestionQuery {
  date: Date
  searchTerm: string
}