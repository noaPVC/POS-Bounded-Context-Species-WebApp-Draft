import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { DiverDto, loginRequest } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:9090/api';
  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get(`${this.apiUrl}/users`);
  }

  login(userName: string, password: string): Observable<DiverDto> {
    const loginRequest: loginRequest = { userName, password };
    return this.http
      .post<DiverDto>(`${this.apiUrl}/diver/login`, loginRequest)
      .pipe(
        tap((diverDto: DiverDto) => {
          localStorage.setItem('currentUser', JSON.stringify(diverDto));
        })
      );
  }

  getUserFromLocalStorage() {
    if (localStorage.getItem('currentUser') !== null) {
      return this.mapUserToDiverDto(
        JSON.parse(localStorage.getItem('currentUser') as string)
      );
    }
    return null;
  }

  mapUserToDiverDto(user: any): DiverDto {
    return {
      id: user.id,
      username: user.username,
      profile_picture: user.profile_picture,
      description: user.description,
      rating: user.rating,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      birthday: user.birthday,
    };
  }
}
