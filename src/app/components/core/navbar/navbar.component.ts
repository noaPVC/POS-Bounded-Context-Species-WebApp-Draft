import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UtilityService } from '../../../services/utility.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(public utilityService: UtilityService) { }
  
}
