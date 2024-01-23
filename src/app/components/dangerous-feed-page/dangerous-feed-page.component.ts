import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DataService } from '../../services/data.service';
import { DangerousFeedItemComponent } from './dangerous-feed-item/dangerous-feed-item.component';

@Component({
  selector: 'app-dangerous-feed-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,

    DangerousFeedItemComponent
  ],
  templateUrl: './dangerous-feed-page.component.html',
  styleUrl: './dangerous-feed-page.component.scss'
})
export class DangerousFeedPageComponent {

  dangerousFeeds$ = this.dataService.getDangerousFeed({})

  constructor(private dataService: DataService) {}

}
