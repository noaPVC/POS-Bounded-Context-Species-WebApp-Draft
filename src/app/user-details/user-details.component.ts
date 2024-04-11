import {Component, OnInit} from '@angular/core';
import {DiverDto} from "../models/user";
import {UserService} from "../services/user.service";
import {DatePipe} from "@angular/common";
import {RatingModule} from "primeng/rating";
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    DatePipe,
    RatingModule
  ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit{
  user: DiverDto | null = null;
  userRating: number = 3;
  private stars: any[] = [];

  constructor(private userService: UserService, private router:Router) { }

  ngOnInit(): void {
    this.user = this.userService.getUserFromLocalStorage();
  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }
  navigateToUserDetails() {
    this.router.navigate(['/user-details']);
  }
}
