import { Component, Input } from '@angular/core';
import { DangerousFeed } from '../../../models/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dangerous-feed-item',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './dangerous-feed-item.component.html',
  styleUrl: './dangerous-feed-item.component.scss'
})
export class DangerousFeedItemComponent {

  @Input() dangerousFeed!: DangerousFeed

}
