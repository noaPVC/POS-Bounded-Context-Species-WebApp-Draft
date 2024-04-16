import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stats-page',
  standalone: true,
  imports: [],
  templateUrl: './stats-page.component.html',
  styleUrl: './stats-page.component.scss'
})
export class StatsPageComponent {

  constructor(private router: Router) {}

  navigateToUserDetails() {
    this.router.navigate(['/user-details']);
  }
  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
